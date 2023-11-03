const express = require('express');
const { Sighting } = require('../models/SightingModel');
const router = express.Router();

// Find ALL sightings in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Sighting.find({});

	response.json({
		sightings: result
	});

});

// Find one sighting by its ID
router.get("/one/id/:id", async (request, response) => {
	let result = null;

	response.json({
		sightings: result
	});

});

// Find one sighting by its name 
// localhost:3000/sightings/one/location/Sydney
router.get("/multiple/location/:locationToSearchFor", async (request, response) => {
	let result = null;

	response.json({
		sightings: result
	});

});




// Create a new cat in the DB
// POST localhost:3000/sightings/
/*
Request.body:
{
	location: "Sydney",
	user: "jbhasdpf;klanbsfdgpk;sldejbnf",
	cats: [
		"kjhtfgvkljzsddhfbnvds"
	]
}
*/
router.post("/", async (request, response) => {

	// let providedUser = await User.findOne({id: request.body.user});
	// providedUser._id

	// Error handling via Promise.catch()
	let result = await Sighting.create(request.body).catch(error => {return error});
	

	response.json({
		cat: result
	});

});

// Update an existing cat in the DB.
// Find one cat by its ID, and modify that cat. 
// Patch is for whatever properties are provided,
// does not overwrite or remove any unmentioned properties of the cat 
router.patch("/:id", async (request, response) => {
	let result = null;

	response.json({
		cat: result
	});

});

// Find one cat by its ID,
// and delete it from the DB.
router.delete("/:id", async (request, response) => {
	let result = null;

	response.json({
		cat: result
	});

});


module.exports = router;