const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SightingSchema = new Schema({
	location: {
		type: String,
		required: true,
		unique: false
	},
	time: {
		type: Date,
		required: false,
		unique: false,
		default: new Date(Date.now())
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	cats: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Cat'
		}
	]
});

// Cool way to do populate on all find____ model methods
// so our controller code is cleaner and shorter 
// SightingSchema.post(/find/i, async (docs) => {
// 	console.log("This hook runs after any find___ model method.");
// 	console.log(docs);

// 	let result = typeof docs === "array" ? 
// 	await docs[0].populate('user cats', '-password') 
// 	: 
// 	await docs.populate('user cats', '-password');

// 	return result;
// })



const Sighting = mongoose.model('Sighting', SightingSchema);

module.exports = {
	Sighting
}

/*
Date.now() ---> 142534767898070908 milliseconds since Jan 1 1970
new Date(Date.now()) ---> creates a Date instance with a timestamp 
equal to that milliseconds from Date.now()

*/