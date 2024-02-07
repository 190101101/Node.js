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
		get(){
			const value = this.getDataValue('testName');
			console.log('getter work');
			return value.toUpperCase() + '-getter';
			this.setDataValue('testName', value.toUpperCase())
		},
		set(value){
			console.log('setter work');
			this.setDataValue('testName', value.toUpperCase())
		},
	},
	testSurname: {
		type: DataTypes.CHAR({length:50}),
		defaultValue: 'cookies',
		validate:{
			isEmail:{
				msg: 'e-mail to this field',
			},
			customValidate(value){
				if(value == 'admin'){
					throw new Error('admin value cannot be entered');
				}
			}
		}
	},
	testFullName:{
		type: DataTypes.VIRTUAL,
		get(){
			return this.testName + '-' +this.testSurname;
		}
	}
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