const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
	res.send('orxan');
	res.json({message: 'ok'}).status(200);
	res.sendFile(path.join(__dirname, '/index.html'));
	res.sendFile(path.join(__dirname, '/image.jpg'));

	res.cookie('mycookie', 'test', {
		expires: new Date(Date.now() + 20000), //20 sec
		domain: 'localhost',
		httpOnly: true
	});
	res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly'); // 2 ci variant cookie
	
	res.attachment(path.resolve('./file.txt'));
	res.sendFile(path.join(__dirname, '/file.txt')); //download
	
	res.download('C:/Users/190101101/Desktop/Node.js/node/example/src/image.jpg');
	
	res.setHeader('test', 'hello');
	res.links({
		first: 'http://localhost:3000',
		second: 'http://localhost:5000',
	})
	res.send('ok');
});

router.get('/redirect', (req, res) => {
	res.redirect('/');
});

  
app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
