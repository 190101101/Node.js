import socketClient from 'socket.io-client';

let socket;
const SERVER = 'http://localhost:5000';

export const connectWebSocket = () => {
    socket = socketClient(SERVER, {
        timeout:50000,
        reconnectionDelay:3000,
        path:'/my-app/src/example/src/lib', 
        extraHeaders:{
            "my-custom-header":"12345"
        }
    });

    socket.on('hey', (data) => {
        console.log(data);
    })
}

export {socket};