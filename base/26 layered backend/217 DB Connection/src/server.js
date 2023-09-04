const express = require('express');
const configs = require('./configs/index');
const db = require('./db/index');

configs.serverConfig.initialServerConfig();
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 3000;

db.mongooseConnection.connectToMongoDb(
	process.env.MONGODB_HOST,
	process.env.MONGODB_PORT,
	process.env.MONGODB_COLLECTION,
	process.env.MONGODB_TAIL,
	process.env.MONGODB_MIN_POOL_SIZE,
	process.env.MONGODB_MAX_POOL_SIZE,
	process.env.MONGODB_CONNECTION_TIMEOUT
).then((r) => {
	console.log('run');
}).catch((err) => {
	console.log(err);
});




/*
router.get('/', (req, res) => {
	res.json({message:'server work'}).status(200);
});
console.log(process.env);
*/


app.use(express.json());
app.use(router);
app.listen(3000, () => {
	console.log(`http://localhost:${PORT}`);
})