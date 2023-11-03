const express = require('express');
const { Cat } = require('../models/CatModel');
const router = express.Router();

// Find ALL cats in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Cat.find({});

	response.json({
		cats: result
	});

});

// Find one cat by its ID
router.get("/one/id/:id", async (request, response) => {
	let result = null;

	response.json({
		cat: result
	});

});

// Find one cat by its name 
// localhost:3000/cats/one/name/Lina
router.get("/multiple/name/:nameToSearchFor", async (request, response) => {
	let result = null;

	response.json({
		cat: result
	});

});

router.get("/multiple/breed/:breedToFilterBy", async (request, response) => {
	let result = null;

	response.json({
		cat: result
	});

});


// Create a new cat in the DB
// POST localhost:3000/cats/
router.post("/", async (request, response) => {

	// Error handling via try-catch
	// let result = null;
	// try {
	// 	result = await Cat.create(request.body);
	// } catch (error) {
	// 	result = error;
	// }

	// Error handling via Promise.catch()
	let result = await Cat.create(request.body).catch(error => {return error});
	

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