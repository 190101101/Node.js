const {DataTypes} = require('sequelize/types');
const db = require('../db');

const TestModel = db.sequelize.define('Test', {
	testName: {
		type: DataTypes.String
	},
	testSurname: {
		type: DataTypes.String
	},
});

module.exports = TestModel;