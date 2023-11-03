require('dotenv').config();

const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { Cat } = require('./models/CatModel');
const { User } = require('./models/UserModel');
const { Sighting } = require('./models/SightingModel');

databaseConnect().then(async () => {

	console.log("Creating seed data!");

	// const Cat = mongoose.model('Cat', {
	// 	name: String,
	// 	colour: String, 
	// 	breed: String,
	// 	favouritePlacesToSit: [String],
	// 	gender: String,
	// 	age: Number, // integer 
	// 	safeToPet: Boolean,
	// 	weightKg: Number, // float / decimal 
	// 	favouriteToys: [String],
	// 	photos: [String] // URL to some file storage like AWS S3, Google Cloud, Azure, whatever 
	// });


	let newLina = new Cat({
		name: "Lina",
		colour: "orange",
		breed:"meowth",
		favouritePlacesToSit: ["keyboard","Zach's shoulder", "clean kitchen counters", "cardboard boxes"],
		gender: "female",
		age: 2,
		safeToPet: true,
		weightKg: 5.5,
		favouriteToys: ["Zach's keyboard", "coffee mugs", "string"],
		photos: ["http://google.com"]
	})
	await newLina.save().then(() => {
		console.log(`${newLina.name} is in the DB`);
	});

	let newUser = await User.create({
		username: "CatLord",
		password: "CatsRule1"
	});

	let newSighting = await Sighting.create({
		location: "Sydney",
		user: newUser._id,
		cats: [
			newLina._id
		]
	});

	console.log(newSighting);



}).then(async () => {
	//imaginary dbDisconnect() 
	// await dbDisconnect();
})