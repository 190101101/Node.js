const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
	name:{
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	team_year:{
		type: Schema.Types.Number,
		required: true,
	},
	countryId:[{
		type: Schema.Types.ObjectId,
		ref: 'country'
	}]
}, {
	autoIndex:true,
	timestamps:true,
	minimize:true,
	versionKey:'_v'
});

const Team = mongoose.model('Team', TeamSchema, 'team');
module.exports = Team;