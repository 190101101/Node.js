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

let users = [];
let rooms = {
	'roomA':[],
	'roomB':[],
};
let data = [];

const io = socketIO.init(server);

io.on('connection', (socket) => {
	users.push({socketId:socket.id});

	console.log('socket connection', socket.id);

	socket.emit('onConnect', socket.id);

	socket.on('disconnect', (reason) => {
		console.log(reason);
		console.log('disconnected socket', socket.id);
		let newRoomA = rooms.roomA.filter((item) => item !== socket.id);
		rooms = {...rooms, roomA:newRoomA};
		io.sockets.emit('joinedroom', rooms);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});

	socket.on('publicmessage', (data) => {
		socket.broadcast.emit('publicmessage', data);
	});

	socket.on('joinroom', (roomname) => {
		rooms[roomname].push(socket.id);
		socket.join(roomname);
		io.sockets.emit('joinedroom', rooms);
	});

	socket.on('messageroom', (data) => {
		io.to(data.room).emit('messageroom', data.message);
	});

	setInterval(() => {
		data = [];
		for(let i = 0; i < 5; i++){
			data.push(Math.floor(Math.random() * 1000)+1);
		}
		socket.emit('vote', data);
	}, 2000);

});