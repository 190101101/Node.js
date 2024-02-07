import {useEffect} from 'react';
import {connectWebSocket, socket} from './client';


const App = () => {

  useEffect(() => {
    connectWebSocket();
  }, []);
  
  return (
    <div>
      <button onClick={() => {
          fetch(`http://localhost:5000/?text=hello&id=${socket.id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log('data', data)
          }
        )
        // console.log(`http://localhost:5000/?text=hello&id=${window.socketID}`);
      }}>
        create record
      </button>
    </div>
  );
}

export default App;
