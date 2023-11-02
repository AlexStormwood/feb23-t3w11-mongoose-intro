const express = require('express');
const { Cat } = require('../models/CatModel');
const router = express.Router();

router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Cat.find({});

	response.json({
		cats: result
	});

});

module.exports = router;