import React, {useEffect} from 'react';
import {connectWebSocket, socket} from './client';

const App = () => {

  useEffect(() => {
    connectWebSocket();
    console.log(socket);
  }, []);


  return (
    <div>
      <h1>hello cookie</h1>
      <button onClick={() => {
        socket.emit('client', `from client: ${socket.id}`)
      }}>send message</button>
    </div>
  );
}

export default App;
