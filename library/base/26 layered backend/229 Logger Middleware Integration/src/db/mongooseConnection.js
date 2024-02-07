const mongoose = require('mongoose');
const logger = require('../utils/index');

exports.connectToMongoDb = async (
	host, port, dbname, tail, minPoolSize, 
	maxPoolSize, connectTimeoutMS
) => {
	try{
		await mongoose.connect(`mongodb+srv://${port}${host}${dbname}${tail}`, {
			minPoolSize, maxPoolSize, autoIndex:true, 
			compressors: 'zlib', connectTimeoutMS
		});

		logger.logger.info('connected to mongodb');
		// console.log('connection');
	}catch(error){
		logger.logger.error(`error: ${error.message}`);
		throw new Error(error.message);
	}
}
