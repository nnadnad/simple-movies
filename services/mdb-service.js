require('dotenv').config()
const axios = require('axios');
const instance = axios.create({
    baseURL: process.env.MDB_URL,
});

module.exports = {
    getGenre: () =>{
        return instance({
            method: 'GET',
            url: `/genre/movie/list?api_key=${process.env.MDB_API_KEY}&language=en-US`,
          })
            .then((res) => {
                return res.data
            })
            .catch((err) => console.error(err));
    },
    getMovieByGenre: (genreId) => {
        return instance({
            method: 'GET',
            url: `/list/${genreId}?api_key=${process.env.MDB_API_KEY}&language=en-US`,
          })
            .then((res) => {
                return res.data
            })
            .catch((err) => console.error(err));
    },
    createList: (name, desc) =>{
        const data = {
            name : name,
            description: desc,
            language: "en"
        };

        return instance({
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json;charset=utf-8'
            },
            url: `/list?api_key=${process.env.MDB_API_KEY}&session_id=${process.env.SESSION_ID}`,
            data: data
          })
            .then((res) => {
                return res;
            })
            .catch((err) => console.error(err));
    }
}