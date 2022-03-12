require('dotenv').config();
const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.MDB_URL,
});


module.exports = {
    getGenre: () => {
        return instance({
            method: 'GET',
            url: `/genre/movie/list?api_key=${process.env.MDB_API_KEY}&language=en-US`,
        })
            .then((res) => {
                return res.data
            })
            .catch((err) => console.error(err));
    }
}