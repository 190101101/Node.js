const express = require('express');
const socket = require('socket.io');
const socketIO = require('./socket');

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
	res.send('socket');
})

app.use(router);

const server = app.listen(5000, () => {
	console.log('port listen on 5000 port');
});

const io = socketIO.init(server);

io.on('connection', (socket) => {
	// console.log(socket.handshake.headers);
	console.log('socket connection', socket.id);

	socket.emit('onConnect', socket.id);

	socket.on('disconnect', (reason) => {
		console.log(reason);
		console.log('disconnected socket', socket.id);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});

	socket.emit('hey', 'sockete baglandin' + Date.now());
	
	socket.on('client', (data) => {
		console.log(data);
	});

	/*
	setInterval(() => {
		socket.emit('time', Date.now());
	}, 1000); 
	*/

	socket.on('sendCustomMessage', (data) => {
		console.log(data);
		io.to(data.socketId).emit('message', data.message);
	});
});