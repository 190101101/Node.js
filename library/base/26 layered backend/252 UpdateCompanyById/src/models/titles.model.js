const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TitleSchema = new Schema({
	name:{
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

const Title = mongoose.model('Title', TitleSchema, 'title');

module.exports = Title;