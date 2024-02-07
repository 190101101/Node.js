const http = require('http');


http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('http server listen on 3000 port');
	res.end();
}).listen(5000);