const {DataTypes} = require('sequelize');
const db = require('../db');

const Test = db.sequelize.define('Test', {
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
			return value.toLowerCase() + '-getter';
			this.setDataValue('testName', value.toLowerCase())
		},
		set(value){
			console.log('setter work');
			this.setDataValue('testName', value.toLowerCase())
		},
	},
	testSurname: {
		type: DataTypes.CHAR({length:50}),
		defaultValue: 'cookies',
		validate:{
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
	modelName: 'Test',
	tableName: 'test',
	timestamps: true,
	underscored: true,
	version: true,
	hooks:{
		beforeValidate:(model) => {
			console.log('beforeValidate', model)
		}
	}
});

Test.addHook('afterCreate', (model) => {
	//example: after create user send email
	console.log('afterCreate', model);
})

module.exports = Test;