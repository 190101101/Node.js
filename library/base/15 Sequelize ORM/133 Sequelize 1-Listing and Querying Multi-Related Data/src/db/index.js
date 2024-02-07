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
    const Test = require('../models/test-model');
    const User = require('../models/user-model');
    const Socials = require('../models/social-model');
    
    // User.hasMany(Socials, {foreignKey: 'user_id'});
    // Socials.belongsTo(User);

    sequelize.sync({force:true});
}

module.exports = db;