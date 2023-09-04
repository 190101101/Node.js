const winston = require('winston');

const logger = winston.createLogger({
	defaultMeta:{api:'zxc application endpoints'},
	format: winston.format.json(),
	transports:[
		new winston.transports.File({filename: 'info.log', level: 'info'}),
		new winston.transports.File({filename: 'warn.log', level: 'warn'}),
		new winston.transports.File({filename: 'error.log', level: 'error'})
	]
});

logger.info('info');
logger.warn('worn');
logger.error('error');
