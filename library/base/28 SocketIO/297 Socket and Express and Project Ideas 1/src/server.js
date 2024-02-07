const express = require('express');
const socket = require('socket.io');
const socketIO = require('./socket');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());

router.get('/', (req, res) => {
	socketIO.getIO().sockets.emit('record', {
		id: req.query.id, 
		text: req.query.text
	});
});

app.use(router);
app.use(cors);

const server = app.listen(5000, () => {
	console.log('port listen on 5000 port');
});

let users = [];


let connectionUsers = [];
const io = socketIO.init(server);

io.on('connection', (socket) => {
	connectionUsers.push({socketId: socket.id, connectionTime: Date.now()});

	console.log('socket connection', socket.id);

	socket.emit('onConnect', socket.id);

	socket.on('disconnect', (reason) => {
		let arr = [...connectionUsers];
		let findedDisconnectUser = arr.find((item) => item.socketId === socket.id);
		findedDisconnectUser.disconnectionTime = Date.now();
		findedDisconnectUser.time = (Date.now() - findedDisconnectUser.disconnectionTime);
		connectionUsers = arr;
		console.log('users:', connectionUsers);

		// console.log(reason);
		// console.log('disconnected socket', socket.id);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});

});
