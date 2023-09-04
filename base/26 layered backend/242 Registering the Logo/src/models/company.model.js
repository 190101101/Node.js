const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
	name:{
		type:Schema.Types.String,
		required:true,
	},
	logo:{
		type:Schema.Types.String,
		required:true,
	},
	year:{
		type:Schema.Types.Number,
		required:true,
	},
	description:{
		type:Schema.Types.String,
		required:true,
	},
	persons:[{
		type:Schema.Types.ObjectId,
		ref:'Person'
	}],
}, {
	minimize:true, 
	timestamps:true, 
	autoIndex:true,
});

const Company = mongoose.model('Company', CompanySchema, 'company');

module.exports = Company;