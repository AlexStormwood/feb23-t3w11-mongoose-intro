// This file handles the boot-up of the server 


require('dotenv').config();

const { databaseConnect } = require('./database');
const { app } = require('./server');


app.listen(3000, async () => {
	await databaseConnect();
	console.log("Server running!");
});