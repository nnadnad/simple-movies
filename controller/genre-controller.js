const mdb_api = require('../services/mdb-services');

async function getGenres(req, res) {
    // return mdb_api.getGenre();
    const allowId = [28,12,16];
    const listGenre = await mdb_api.getGenre();

    const listAllow = listGenre.genres.filter(item => {
        if (allowId.includes(item.id)) {
            console.log(item.id);
            return item;
        };
    });

    const findById = listGenre.genres.find(item => {
        if (item.id === 28) {
            console.log(item.id);
            return item;
        };
    });
    console.log(listAllow);
    res.json(listAllow).end();
}


module.exports = { getGenres };