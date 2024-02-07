const {DataTypes} = require('sequelize');
const db = require('../db');

const Movie = db.sequelize.define('Movie', {
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true,
		autoIncrement:true,
		unique:true,
	},
	moviename: {
		type: DataTypes.STRING({length:50}),
	},
}, {
	createdAt: true, 
	updatedAt: true, 
	deletedAt: true,
	modelName: 'Movie',
	tableName: 'movie',
	timestamps: true,
	underscored: true,
	version: true,
});


module.exports = Movie;