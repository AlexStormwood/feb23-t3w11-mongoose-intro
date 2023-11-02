const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: false
	},
	colour: {
		type: String,
		required: true,
		unique: false
	},
	favouritePlacesToSit: {
		type: [String],
		required: false,
		unique: false
	},
	gender: {
		type: String,
		required: false,
		unique: false
	},
	age: {
		type: Number,
		required: false,
		unique: false
	},
	safeToPet: {
		type: Boolean,
		required: false,
		unique: false
	},
	weightKg: {
		type: Number,
		required: false,
		unique: false
	},
	favouriteToys: {
		type: [String],
		required: false,
		unique: false
	},
	photos: {
		type: [String],
		required: false,
		unique: false
	},
	breed: {
		type: String,
		required: true,
		unique: false
	}
});

const Cat = mongoose.model('Cat', CatSchema);

module.exports = {
	Cat
}

/*

	const Cat = mongoose.model('Cat', {
		name: String,
		colour: String, 
		breed: String,
		favouritePlacesToSit: [String],
		gender: String,
		age: Number, // integer 
		safeToPet: Boolean,
		weightKg: Number, // float / decimal 
		favouriteToys: [String],
		photos: [String] // URL to some file storage like AWS S3, Google Cloud, Azure, whatever 
	});

*/