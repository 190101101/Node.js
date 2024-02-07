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
    </div>
  );
}

export default App;
