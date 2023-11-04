// Server configuration happens in server.js


const express = require('express');

// make a server instance 
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});

const { User } = require('./models/UserModel');


const CatRouter = require('./controllers/CatController');
app.use('/cats', CatRouter);

const SightingRouter = require('./controllers/SightingController');
app.use('/sightings', SightingRouter);

module.exports = {
	app
}