const express = require('express');
const cors = require('cors');
const {default: helmet} = require('helmet');
const configs = require('./configs/index');
const db = require('./db/index');
const router = require('./router/index');

const app = express();
const PORT = process.env.PORT || 3000;

configs.serverConfig.initialServerConfig();

app.use(express.json());
app.use(helmet());
app.use(cors());

// app.use(`${process.env.APP_PREFIX}`, router.test);
// http://localhost:3000/api/v1/test

app.use(`${process.env.APP_PREFIX}test`, router.test);
// http://localhost:3000/api/v1/test/test


db.mongooseConnection.connectToMongoDb(
	process.env.MONGODB_HOST,
	process.env.MONGODB_PORT,
	process.env.MONGODB_COLLECTION,
	process.env.MONGODB_TAIL,
	process.env.MONGODB_MIN_POOL_SIZE,
	process.env.MONGODB_MAX_POOL_SIZE,
	process.env.MONGODB_CONNECTION_TIMEOUT
).then((r) => {
	app.listen(3000, () => {
		console.log(`http://localhost:${PORT}`);
	});
}).catch((err) => {
	console.log(err);
});



