const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname+'/pages/index.html');
});

app.get('/user', (req, res) => {
	res.sendFile(__dirname+'/pages/user.html');
});

app.get('/test', (req, res) => {
	res.sendFile(__dirname+'/pages/test.html');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
})