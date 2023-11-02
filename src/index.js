// This file handles the boot-up of the server 


require('dotenv').config();

const { app } = require('./server');


app.listen(3000, () => {
	console.log("Server running!");
});