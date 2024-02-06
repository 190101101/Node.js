const express = require('express');
const socket = require('socket.io');

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
	res.send('socket');
})

app.use(router);

const server = app.listen(3000, () => {
	console.log('http://localhost:3000');
});

const io = socket(server);

io.on('connection', (socket) => {
	console.log('connection socket:', socket.id);

	setInterval(() => {
		socket.emit('time', `server time: ${Date.now()}`);
	}, 3000);

	
	socket.on('disconnect', (reason) => {
		console.log('disconnected socket', socket.id);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});

	socket.on('client', (data) => {
		console.log(`client: ${socket.id}: ${data}`);
		io.to(socket.id).emit('answer', 'hello to');
	});
});