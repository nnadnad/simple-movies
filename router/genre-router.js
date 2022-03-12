const express = require('express');
const genreController = require('../controller/genre-controller');
const router = express.Router();

router.get('/', genreController.getGenres);



module.exports = router;
