const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animalSchema = new Schema({
	name:{
		type: Schema.Types.String,
		required: true,
		// unique: false,
		validate: () => {
			Promise.resolve(false)
		}
	},
	family:{
		type: Schema.Types.String,
		required:[true, 'family is required']
	},
	age:{
		type: Schema.Types.Number,
		required: function(){
			return this.age > 3
		}
	},
	live_area:{
		type: Schema.Types.Array,
		/*
		validate:{
			validator:function(value){
				return value.length < 1
			},
			message: field => field.value + ' oops'
		}
		*/
	},
}, {
	autoIndex:true,
	timestamps:true,
	// id:true,
	minimize:true,
	validateBeforeSave:true,
	versionKey:'_v'
});

const Animal = mongoose.model('Animal', animalSchema, 'animal');
module.exports = Animal;