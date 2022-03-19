const mdb_api = require('../services/mdb-service');

async function addNewList(req,res) {
    const {name, desc} = req.body;

    const createList = await mdb_api.createList(name, desc);
    if(createList.status === 201){
        res.status(createList.status).json({message: createList.statusText});
    }; 
}

module.exports = { addNewList }