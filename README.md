# feb23-t3w11-mongoose-intro

## Saturday Goals

- Implement error handling (basic way) on CRUD operations
- Creating "Sightings" model and associating them with Users and Cats 
- Doing CRUD for Sightings documents


## Thursday Goals

- Start a lil cat-tracking backend app project
- Data design / planning some schemas
- Basic CRUD for notes in Mongoose and Express


- Users 
	- username
	- password
- Cats 
	- all that cat data from Tuesday 
	- name, breed, favouritePlaceToSit, etc 
- Sightings 
	- date
	- place
	- User.id
	- Cat.id 


MongoDB with JSON Schema validation, not at all required or used specifically:
<!-- db.createCollection("messages", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         // the required fields, no message without any of these fields
         required: [ "text", "user", "likes"],
         properties: {
            text: {
               bsonType: "string",
               description: "must be a string and is required"
            }, -->




## Extra notes 

npm run seed
node src/seed.js
	database.js

npm run start
npm run dev
node src/index.js
	server.js
		database.js 


