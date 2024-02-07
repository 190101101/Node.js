const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
	console.log('url: ', req.url);
	console.log('content: ', req.is('html'));
	console.log('getType: ', req.get('Content-Type'));
	console.log('hostname:', req.hostname);
	console.log('headers:', req.headers);
	console.log('protocol:', req.protocol);
	console.log('ip:', req.ip);
	console.log('httpVersion:', req.httpVersion);
	console.log('path:', req.path);
	console.log('secure:', req.secure);
	res.status(200);
});
  
app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
