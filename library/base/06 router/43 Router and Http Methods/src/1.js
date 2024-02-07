const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.json({message: 'get request'}).status(201);
});

router.post('/', (req, res) => {
	res.json({message: 'post request'}).status(201);
});

router.delete('/', (req, res) => {
	res.json({message: 'delete request'}).status(201);
});

router.put('/', (req, res) => {
	res.json({message: 'put request'}).status(201);
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});