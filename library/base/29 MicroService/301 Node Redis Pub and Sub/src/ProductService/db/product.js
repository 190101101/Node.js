const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
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

const Product = mongoose.model('Product', productSchema, 'product');
module.exports = Product;