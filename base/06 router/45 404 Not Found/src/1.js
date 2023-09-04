const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.json({message: 'get request'}).status(201);
});

router.get('/:brand/auto/:city', (req, res) => {
	const query = req.query;
	console.log(query);
	console.log(query.min, query.max);
	res.sendFile(__dirname+'/index.html');
});

router.use((req, res) => {
	res.status(404).json({
		message: '404 not page found',
		url: req.url,
		date: Date.now(),
		statusCode: 404
	});
	// res.sendFile(__dirname+'/404.html');
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});


// http://localhost:3000/bmw/auto/baku?min=1000&max=5000