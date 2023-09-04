const socketClient = require('socket.io-client');

let socket;
const SERVER = 'http://localhost:5000';

const connectWebSocket = () => {
    socket = socketClient(SERVER);

    socket.on('server', (data) => {
        console.log(`${data} | ${socket.id}`);
    })

    console.log(socket.id);

    socket.emit('client', `hello from client ${Date.now()}`);
}


connectWebSocket();