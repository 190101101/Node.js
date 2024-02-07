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
	client.get('jsondata4').then((r) => {
		if(r){
			console.log('is exist')
			res.json(JSON.parse(r));
		}else{
			console.log('not exist')
			res.json(json);
			client.set('jsondata4', JSON.stringify(json)).then((rr) => {
				console.log('rr:', rr);
			})
		}
	})
})

app.use(router);

connectRedis().then(() => {
	app.listen(3000, () => {
		console.log('http://localhost:3000');
	})
});


