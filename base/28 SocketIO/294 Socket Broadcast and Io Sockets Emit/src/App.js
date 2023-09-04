import {useEffect} from 'react';
import {connectWebSocket, socket} from './client';

const App = () => {

  useEffect(() => {
    connectWebSocket();
  }, []);
  
  return (
    <div>
      <button onClick={() => {
        socket.emit('publicmessage', {id:window.socketID, message: 'hello'})
      }}>public message</button>
    </div>
  );
}

export default App;
