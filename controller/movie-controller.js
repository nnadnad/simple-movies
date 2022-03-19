const mdb_api = require('../services/mdb-service');


async function getMovieByGenre(req,res) {
    const allowId = [28,12,16];
    const listMovie = [];
    const listGenre =  await mdb_api.getGenre();

    const listAllow = listGenre.genres.filter(item => {
        if(allowId.includes(item.id)) {
            console.log(item.id);
            return item
        };
    });

    await Promise.all(listAllow.map(async (genre) => {
        const movie = await mdb_api.getMovieByGenre(genre.id);
        listMovie.push(movie);
    }));

    res.json(listMovie).end();
}

function listMovie(){
    const movies = [{
        id: 1,
        name: 'Sinchan',
        genre: 'Kids'
    }]
    return movies;
}


module.exports = {movieGenre: getMovieByGenre, listMovie};
