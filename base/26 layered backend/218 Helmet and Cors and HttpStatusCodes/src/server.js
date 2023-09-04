const express = require('express');
const cors = require('cors');
const {default: helmet} = require('helmet');
const configs = require('./configs/index');
const db = require('./db/index');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

configs.serverConfig.initialServerConfig();

app.use(express.json());
app.use(router);
app.use(helmet());
app.use(cors());

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



