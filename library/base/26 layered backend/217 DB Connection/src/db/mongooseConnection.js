const mongoose = require('mongoose');

exports.connectToMongoDb = async (
	host, port, collection, tail, minPoolSize, maxPoolSize, connectTimeoutMS
) => {
	try{
		await mongoose.connect(`mongodb+srv://${port}${host}${collection}${tail}`, {
			minPoolSize,
	        maxPoolSize,
	        autoIndex:true,
	        compressors: 'zlib',
	        connectTimeoutMS
		});
		console.log('connection');
	}catch(error){
		console.log('error', error);
	}
}
