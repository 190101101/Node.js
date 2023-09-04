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

/*
animalSchema.statics.findByAnimalName = (name) => {
	console.log('hello' + name);
	return 'hello';
	return this.find({name});
}

animalSchema.query.byFamily = (family) => {
	console.log('byFamily'+family);
	return 'hello';
	return this.where({family});
}

animalSchema.virtual('animalFamily').get(function() {
	console.log('getter', this);
	return this.name + '-' + this.family;
}).set(function(val) {
	console.log('setter', this);
	this.name = val.toUpperCase() + '-hello';
});

animalSchema.pre('save', (next) => {
	console.log('midd work');
	next();
});
*/

const Animal = mongoose.model('Animal', animalSchema, 'animal');
module.exports = Animal;