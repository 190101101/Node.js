import {useEffect, useState} from 'react';
import {connectWebSocket, socket} from './websocket';

const App = () => {

    const [socketInput, setSocketInput] = useState();

  useEffect(() => {
    connectWebSocket();
  }, []);
  
  return (
    <div>
      <button onClick={() => {
        socket.emit('client', `message from socket ${socket.id}`);
      }}>send message to server</button>

      <input onChange={(e) => {setSocketInput(e.target.value)}}/>
      <button onClick={() => {
        socket.emit('sendCustomMessage', {socketId:socketInput, message:'hello', from:socket.id})
      }}>send message to user</button>
    </div>
  );
}

export default App;
