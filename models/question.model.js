const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionsSchema = new Schema({
	question: {
		type: String,
		required: [ true, 'every quiz got questions, right?' ]
	},
	points: {
		type: Number,
		required: [ true, 'indicates the points for a inidividual question' ]
	},
	options: [
		{
			answer: String,
			isRight: Boolean
		}
	]
})

module.exports = questionsSchema;