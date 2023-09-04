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
    try {
        await db.sequelize.authenticate({logging: false});
    } catch (error) {
        console.log(error);
    }
}

db.createTables = async () => {
    const TestModel = db.sequelize.define('Test', {
        testName: {
            type: DataTypes.STRING
        },
        testSurname: {
            type: DataTypes.STRING
        },
    });
    await TestModel.sync({force: true});
}

module.exports = db;