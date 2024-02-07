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
        console.log(data);
        window.socketIO = data;
    });


    /*
    console.log(socket.id);
    window.socketIO = socketClient(socket.id);
    */

    socket.on('hey', (data) => {
        console.log(data);
    });

    socket.on('message', (data) => {
        console.log('spec message', data);
    });
}

export {socket};