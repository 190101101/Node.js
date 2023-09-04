import socketClient from 'socket.io-client';

let socket;
const SERVER = 'http://localhost:5000';

const notify = (text) => {
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }else{
        let notification = new Notification('hey', {
            body: text
        });
        
        notification.onclick = () => {
            window.open('http://localhost:3000');
        }
    }
}

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
        window.socketId = data;
    });

    socket.on('record', (data) => {
        if(data.id !== window.socketId){
            notify('you has a notify');
            console.log(data);
        }
    });
}

export {socket};