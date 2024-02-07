const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
	autoIndex:true,
	timestamps:true,
	id:true,
	minimize:true,
	validateBeforeSave:true,
	versionKey:'_v'
});

const Animal = mongoose.model('Animal', animalSchema, 'animal');
module.exports = Animal;