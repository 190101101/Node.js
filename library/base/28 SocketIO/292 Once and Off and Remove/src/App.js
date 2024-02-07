import logo from './logo.svg';
import {useEffect} from 'react';
import {connectWebSocket, socket} from './websocket';
import './App.css';

const App = () => {

  useEffect(() => {
    connectWebSocket();

  }, []);
  
  return (
    <div>
      <button onClick={() => {
        socket.emit('client', `message from socket ${socket.id}`);
      }}>send message to server</button>
    </div>
  );
}

export default App;
