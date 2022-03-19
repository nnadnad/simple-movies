const express = require('express');
const listController = require('../controller/list-controller');
const router = express.Router();

router.post('/', listController.addNewList);



module.exports = router;
