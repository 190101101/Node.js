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
	res.redirect('/user');
});

app.get('/user', (req, res) => {
	res.sendFile(__dirname+pages+'user.html');
});

app.listen(3000, () => {
	console.log('http://localhost:3000');
})