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

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});


// http://localhost:3000/bmw/auto/baku?min=1000&max=5000