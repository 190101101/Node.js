const {DataTypes} = require('sequelize');
const db = require('../db');

const ActorMovie = db.sequelize.define('ActorMovie', {
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true,
		autoIncrement:true,
		unique:true,
	},
}, {
	createdAt: true, 
	updatedAt: true, 
	deletedAt: true,
	modelName: 'ActorMovie',
	tableName: 'actormovie',
	timestamps: true,
	underscored: true,
	version: true,
});

module.exports = ActorMovie;