const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res) => {
	let data = [];

	for(let i = 0; i < 1000000; i++){
		data.push(i);
	}

	res.json(data);
})

app.use(router);

app.listen(3000, () => {});