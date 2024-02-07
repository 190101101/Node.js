const express = require('express');
const json = require('./mock.json');
const {createClient} = require('redis');

const app = express();
const router = express.Router();
const client = createClient();

const connectRedis = async() => {
	await client.connect();
}

app.use(express.json());

router.get('/', (req, res) => {
	client.get('jsondata').then((r) => {})
})

app.use(router);

connectRedis().then(() => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
	})
});


