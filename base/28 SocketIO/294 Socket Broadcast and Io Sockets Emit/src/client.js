import socketClient from 'socket.io-client';

let socket;
const SERVER = 'http://localhost:5000';

export const connectWebSocket = () => {
    socket = socketClient(SERVER, {
        reconnectionDelay:3000,
        timeout:50000,
        path:'/my-app/src/example/src/lib', 
        extraHeaders:{
            "my-custom-header":"12345"
        }
    });

    socket.on('onConnect', (data) => {
        window.socketID = data;
    });

    socket.on('publicmessage', (data) => {
        if(data.id !== window.socketID){
            console.log('publicmessage', data);
        }
    });
}

export {socket};