import socketClient from 'socket.io-client';

let socket;
const SERVER = 'http://localhost:5000';

export const connectWebSocket = () => {
    socket = socketClient(SERVER);

    socket.on('hey', (data) => {
        console.log(data);
    })
}

export {socket};