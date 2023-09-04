const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
	name:{
		type:Schema.Types.String,
		required:true,
	},
	surname:{
		type:Schema.Types.String,
		required:true,
	},
	birthDate:{
		type:Schema.Types.Number,
		required:true,
	},
	gender:{
		type:Schema.Types.String,
		required:true,
	},
	salary:{
		type:Schema.Types.Number,
		required:true,
	},
	tcNumber:{
		type:Schema.Types.String,
		required:true,
		min:11,
		max:11
	},
	email:{
		type:Schema.Types.String,
		required:true,
		// unique:true,
	},
	password:{
		type:Schema.Types.String,
		required:true,
		min:3
	},
	avatar:{
		type:Schema.Types.String,
		required:true,
	},
	cvFile:{
		type:Schema.Types.String,
		required:true,
	},
	country:{
		type:Schema.Types.String,
		required:true,
	},
	city:{
		type:Schema.Types.String,
		required:true,
	},
	company:{
		type:Schema.Types.ObjectId,
		ref:'company'
	},
	title:{
		type:Schema.Types.ObjectId,
		ref:'Title'
	},
}, {
	minimize:true, 
	timestamps:true, 
	autoIndex:true,
});

const Person = mongoose.model('Person', PersonSchema, 'person');

module.exports = Person;