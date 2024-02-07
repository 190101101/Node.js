const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.json({message: 'get request'}).status(201);
});

router.get('/:brand/auto/:city', (req, res) => {
	const params = req.params;
	console.log(params.brand);
	console.log(params.city);
	res.sendFile(__dirname+'/index.html');
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});