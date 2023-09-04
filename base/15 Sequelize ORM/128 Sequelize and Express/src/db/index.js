const { Sequelize, DataTypes } = require('sequelize');
const db = {};

const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: 40,
    logging: true,
    retry:3
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.connect = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.sequelize.authenticate({logging: false});
            resolve(db);
        } catch (error) {
            reject(error);
            console.log(error);
        }
    })
}

db.createTables = async () => {
    const TestModel = require('../models/test-model');
    TestModel.sync({force:true});
}

module.exports = db;