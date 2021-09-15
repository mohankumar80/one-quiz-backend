const mongoose = require('mongoose');
const { Schema } = mongoose;
const questionsSchema = require('./question.model');

const quizSchema = new Schema({
	quizName: {
		type: String,
		required: [ true, 'every quiz got a name!' ]
	},
	noOfQuestions: {
		type: Number,
		required: [ true, 'total no of questions' ]
	},
	logo: {
		type: String,
		required: [ true, 'every quiz has a logo!!']
	},
	quiz: [ questionsSchema ]
})

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;