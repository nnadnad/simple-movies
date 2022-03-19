const express = require('express');
const movieController = require('../controller/movie-controller');
const router = express.Router();

router.get('/genre', movieController.movieGenre);



module.exports = router;
