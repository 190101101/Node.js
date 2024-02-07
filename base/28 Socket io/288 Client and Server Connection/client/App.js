import React, {useEffect} from 'react';
import * as ws from './client';

const App = () => {

  useEffect(() => {
    ws.connectWebSocket();
  }, []);

  return (
    <div>
      <h1>hello cookie</h1>
    </div>
  );
}

export default App;
