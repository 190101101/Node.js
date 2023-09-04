const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')))
const pages = '/public/pages/';

app.get('/', (req, res) => {
	res.sendFile(__dirname+pages+'index.html');
});

app.get('/test', (req, res) => {
	res.send('get request');
});

app.post('/test', (req, res) => {
	res.send('post request');
});

app.delete('/test', (req, res) => {
	res.send('delete request');
});

app.put('/test', (req, res) => {
	res.send('put request');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
})