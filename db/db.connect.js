const mongoose = require('mongoose');

const DBCredentials = process.env['DB_Credentials']

const initializeDBConnection = async () => {
	try {
		await mongoose.connect(DBCredentials);
		console.log('successfully connected to database');
	} catch (error) {
		console.log('failed to connect to database');
	}
}

module.exports = initializeDBConnection;