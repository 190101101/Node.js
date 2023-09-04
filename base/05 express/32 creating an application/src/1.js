const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/user', (req, res) => {
	res.send('user');
});

app.get('/profile', (req, res) => {
	res.send('profile');
});

app.listen(3000, () => {
	console.log('server listen on https://localhost:3000 port');
})
