const winston = require('winston');
const loggerConfig = require('../configs/index');
const logger = winston.createLogger(loggerConfig.loggerConfig);

module.exports = logger;