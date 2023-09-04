const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile(__dirname+'/public/pages/index.html');
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});