const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'node',
  password: '',
  waitForConnections: true,
  pool: 5,
  charset: 'UTF8_GENERAL_CI',
  port: 3306,
  debug: false,
  timezone: 'local',  
});

module.exports = connection;