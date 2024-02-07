const mongoose = require('mongoose');

exports.connectToMongoDb = async (
// const connectToMongoDb = async (
	host, port, collection, tail, minPoolSize, maxPoolSize, connectTimeoutMS
	// link
) => {
	try{
		await mongoose.connect(`mongodb+srv://${port}${host}${collection}${tail}`, {
		// await mongoose.connect(`mongodb+srv://HdivLLtP2S0hy2mv:dMT85n2J90YufqZp@node.468w3f9.mongodb.net/mydb?retryWrites=true&w=majority`, {
		// await mongoose.connect(link, {
			// compressors:'zlib', autoIndex:true, minPoolSize, maxPoolSize, connectTimeoutMS
			minPoolSize:20,
	        maxPoolSize:40,
	        autoIndex:true,
	        compressors: 'zlib',
	        connectTimeoutMS: 5000
		});
		console.log('connection');
	}catch(error){
		console.log('error', error);
	}
}

/*
connectToMongoDb().then((r) => {
	console.log(r);
}).catch((err) => {
	console.log(err);
})
*/
