const winston = require('winston');
const {label, timestamp, prettyPrint, json} = winston.format;

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
		// myFormat
	),
	transports:[
		new winston.transports.File({filename: 'info.log', level: 'info'}),
		new winston.transports.File({filename: 'warn.log', level: 'warn'}),
		new winston.transports.File({filename: 'error.log', level: 'error'}),
		new winston.transports.Console()
	]
});

logger.debug('test');
logger.info('info');
logger.warn('worn');
logger.error('error');
