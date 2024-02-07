const winston = require('winston');
const {label, timestamp, prettyPrint, json} = winston.format;
const dailyRotateFile = require('winston-daily-rotate-file');

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
			dirname: './example/src/logs',
		})
	]
});

class MyLogger{
	logError(message){
		logger.error(message);
	}
	
	logInfo(message){
		logger.info(message);
	}

	logWarn(message){
		logger.warn(message);
	}
}


module.exports = MyLogger;
