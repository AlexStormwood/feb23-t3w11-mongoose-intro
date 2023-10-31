// This file handles the boot-up of the server 


const { app } = require('./server');


app.listen(3000, () => {
	console.log("Server running!");
});