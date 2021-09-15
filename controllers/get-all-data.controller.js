const Quiz = require('../models/quiz.model')

const getAllData = async (req, res) => {
	try {
		const quizzes = await Quiz.find({})
		res.status(200).json({ success: true, quizzes })
	} catch (error) {
		res.status(400).json({ success: false, message: 'failed to retrieve all quizzes' })
	}
}

module.exports = getAllData;