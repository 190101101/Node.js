const express = require('express');
const socket = require('socket.io');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('socket');
})

app.use(router);

const server = app.listen(3000, () => {
	console.log('port 3000')
});

const io = socket(server, {});

io.on('connection', (socket) => {
	console.log('socket connection', socket);
});