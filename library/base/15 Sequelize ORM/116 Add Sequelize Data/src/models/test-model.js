const {DataTypes} = require('sequelize');
const db = require('../db');

const TestModel = db.sequelize.define('Test', {
	id:{
		type: DataTypes.BIGINT,
		allowNull:false,
		primaryKey:true,
		autoIncrement:true,
		unique:true,
		field: 'test_id'
	},
	testName: {
		type: DataTypes.STRING({length:50}),
		defaultValue: 'cookie',
	},
	testSurname: {
		type: DataTypes.CHAR({length:50}),
		defaultValue: 'cookies',
	},
}, {
	createdAt: true, 
	updatedAt: true, 
	deletedAt: true,
	modelName: 'TestModel',
	tableName: 'test',
	timestamps: true,
	underscored: true,
	version: true,
});

module.exports = TestModel;