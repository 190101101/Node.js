const {DataTypes} = require('sequelize');
const db = require('../db');

const Socials = db.sequelize.define('socials', {
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true,
		autoIncrement:true,
		unique:true,
	},
	socialname: {
		type: DataTypes.STRING({length:50}),
	},
}, {
	createdAt: true, 
	updatedAt: true, 
	deletedAt: true,
	modelName: 'Socials',
	tableName: 'social',
	timestamps: true,
	underscored: true,
	version: true,
});


module.exports = Socials;