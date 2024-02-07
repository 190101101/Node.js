const {connectMongoDB } = require('./db/db');
const express = require('express');
const app = express();
const router = express.Router();
const Animal = require('./db/animal');

router.get('/', (req, res) => {
	Animal.findOne().then((r) => {
		res.json(r).status(200);
	})
});

app.use(express.json());
app.use(router);

connectMongoDB().then(() => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
	});
});

