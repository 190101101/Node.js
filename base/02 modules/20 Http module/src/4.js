const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
	console.log(req.url);
	console.log(req.headers);
	console.log(req.method);
}).listen(5000);