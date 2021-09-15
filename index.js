const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());

const initializeDBConnection = require('./db/db.connect');
const quizRouter = require('./routers/quiz.router');

initializeDBConnection();

app.get('/', (req, res) => {
	res.json({ success: true, message: 'welcome to quiz backend' })
})

app.use('/quizzes', quizRouter)


/*
NOT FOUND
*/
app.all('*', (req, res) => {
	res.status(404).json({ success: false, message: 'the route you are looking for does not exists!!' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
	console.log(`server started at port: ${PORT}`)
})