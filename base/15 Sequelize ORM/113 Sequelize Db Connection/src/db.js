const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: 40,
    logging: true,
    retry:3
});

const db = async () => {
    try {
        await sequelize.authenticate({logging: true});
        console.log('ok');
    } catch (error) {
        console.log(error);
    }
}

db();