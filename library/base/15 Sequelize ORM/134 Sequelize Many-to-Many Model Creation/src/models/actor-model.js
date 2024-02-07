const {DataTypes} = require('sequelize');
const db = require('../db');

const Actor = db.sequelize.define('Actor', {
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true,
		autoIncrement:true,
		unique:true,
	},
	actorname: {
		type: DataTypes.STRING({length:50}),
	},
}, {
	createdAt: true, 
	updatedAt: true, 
	deletedAt: true,
	modelName: 'Actor',
	tableName: 'actor',
	timestamps: true,
	underscored: true,
	version: true,
});


module.exports = Actor;