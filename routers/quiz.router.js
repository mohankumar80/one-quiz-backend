const express = require('express');
const quizRouter = express.Router();
const getAllData = require('../controllers/get-all-data.controller');

quizRouter.route('/')
.get(getAllData)

module.exports = quizRouter;