const winston = require('winston');
const {label, timestamp, prettyPrint, json} = winston.format;
const dailyRotateFile = require('winston-daily-rotate-file');

const myFormat = winston.format.printf(
	({level, message, label, timestamp}) => {
	return {timestamp ,label, message, level};
	return `error occurred: ${timestamp} - ${label} - ${message} - ${level}`;
});

const logger = winston.createLogger({
	defaultMeta:{api:'api application endpoints'},
	format: winston.format.combine(
		label({label: 'api'}),
		timestamp(),
		prettyPrint(),
		json(),
	),
	level: 'error',
	transports:[
		new dailyRotateFile({
			datePattern:"DD-MM-YYYY",
			filename:"myapp-%DATE%.log",
			dirname: './logs/',
		})
	]
});

logger.debug('test');
logger.info('info');
logger.warn('worn');
logger.error('error');

