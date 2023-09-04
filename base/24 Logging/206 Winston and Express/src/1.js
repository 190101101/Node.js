const express = require('express');
const app = express();
const MyLogger = require('./logger');

const logger = new MyLogger();

const router = express.Router();

const data = [];

router.get('/', (req, res) => {
	try{
		logger.logError(`to the relevant endpoint`);
		res.json(data);
	}catch(error){
		logger.logError(`failed to provide related endpoint to localhost from ${req.ip}`);
	}
});

app.use(express.json());
app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});

