const {DataTypes} = require('sequelize');
const db = require('../db');

const SocialModel = db.sequelize.define('social', {
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
	modelName: 'SocialModel',
	tableName: 'social',
	timestamps: true,
	underscored: true,
	version: true,
});


module.exports = SocialModel;