const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name:{
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
}, {
	autoIndex:true,
	timestamps:true,
	id:true,
	minimize:true,
	validateBeforeSave:true,
	versionKey:'_v'
});

const User = mongoose.model('User', userSchema, 'user');
module.exports = User;