const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile(req.url.split('/')[1], (err, data) => {
		if(err){
			res.writeHead(404);
			res.end('page not found');
			return;
		}
		res.write('test');
		res.end(data);
	});
}).listen(5000);