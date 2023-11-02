const mongoose = require('mongoose');

/**
 * Connect or create & connect to a database.
 * @date 10/31/2023 - 8:20:07 PM
 * @author BigfootDS
 */
async function databaseConnect(){
	try {
		// DB connection can take some time, eg. if DB is in the cloud 
		console.log("Connecting to:\n" + process.env.DB_URI);
		await mongoose.connect(process.env.DB_URI);
		console.log("Database connected");
	} catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
	databaseConnect
}