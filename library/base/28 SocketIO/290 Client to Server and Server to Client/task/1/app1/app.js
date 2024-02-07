const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(5000, () => {
	console.log('http://localhost:5000');
});

const io = socket(server);

io.on('connection', (socket) => {
	socket.on('disconnect', (reason) => {
		 if (reason === "io server disconnect") {
  			socket.connect();
		 }
		console.log(reason);
		console.log('disconnected socket', socket.id);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});

    socket.on('client', (data) => {
    	console.log(data);
    });

	socket.emit('server', `server[+] client: `);
});