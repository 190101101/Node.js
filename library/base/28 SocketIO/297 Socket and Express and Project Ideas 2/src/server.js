const express = require('express');
const socket = require('socket.io');
const socketIO = require('./socket');
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(express.json());

app.use(express.json());

router.get('/', (req, res) => {
	socketIO.getIO().sockets.emit('record', {
		id: req.query.id, 
		text: req.query.text
	});
});

router.get('/sendphoto', (req, res) => {
	socketIO.getIO().sockets.emit('broadcastPhoto', {
		id: req.query.id, 
		photo: req.query.photo
	});
});

app.use(router);
app.use(cors);

const server = app.listen(5000, () => {
	console.log('port listen on 5000 port');
});

const io = socketIO.init(server);

io.on('connection', (socket) => {

	console.log('socket connection', socket.id);

	socket.emit('onConnect', socket.id);

	socket.on('disconnect', (reason) => {
		console.log(reason);
		console.log('disconnected socket', socket.id);
	});
	
	socket.on('disconnecting', (reason) => {
		console.log('disconnecting', reason);
	});
	
	socket.on('text', (text) => {
		io.sockets.emit('textType', text);
	});

});
