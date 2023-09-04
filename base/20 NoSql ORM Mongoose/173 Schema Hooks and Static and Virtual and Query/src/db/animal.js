const mongoose = require('mongoose');

const Schema = mongoose.schema;

const animalSchema = new Schema({
	name:{
		type: Schema.Types.String,
		required: true,
		unique: true
	},
	family:{
		type: Schema.Types.String,
	},
	age:{
		type: Schema.Types.Number,
	},
	live_area:{
		type: Schema.Types.Array,
	},
}, {
	_id:false,
	autoIndex:true,
	timestamps:true,
	id:true,
	minimize:true,
	validateBeforeSave:true,
	versionKey:true
});

const Animal = mongoose.model('Animal', animalSchema, 'animal');
module.exports = Animal;