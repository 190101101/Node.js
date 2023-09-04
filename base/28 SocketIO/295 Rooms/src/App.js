import {useEffect} from 'react';
import {connectWebSocket, socket} from './client';

const App = () => {
  
  useEffect(() => {
    connectWebSocket();
  }, []);
  
  return (
    <div>
      <button onClick={() => {
        socket.emit('publicmessage', {id:window.socketId, message: 'hello'})
      }}>public message</button>

      <button onClick={() => {
        socket.emit('joinroom', 'roomA');
      }}>join to room [a]</button>
      
      <button onClick={() => {
        socket.emit('messageroom', {room: 'roomA', message: 'hello'});
      }}>send message to room [a]</button>


    </div>
  );
}

export default App;
