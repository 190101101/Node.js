const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
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

const Users = mongoose.model('Users', usersSchema, 'users');
module.exports = Users;