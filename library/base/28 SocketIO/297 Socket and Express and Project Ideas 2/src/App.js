import {useEffect, useState} from 'react';
import {connectWebSocket, socket} from './client';


const App = () => {

  const [photo, setPhoto] = useState(false);
  const [text, setText] = useState("");
  const [socketText, setSocketText] = useState("");

  useEffect(() => {
    connectWebSocket();

    socket.on('broadcastPhoto', (data) => {
      if(data.id !== window.socketId){
        setPhoto(data.photo);
      }
    });

    socket.on('textType', (data) => {
      setSocketText(data);
    });

  }, []);
  
  return (
    <div>
      <button onClick={() => {
        setPhoto(fetch(`http://localhost:5000/sendphoto?photo=https://images-prod.dazeddigital.com/500/azure/dazed-prod/1090/1/1091228.jpg&id=${socket.id}`)
        .then((res) => res.json())
          .then((data) => {
            console.log('data', data)
          }
        ));
      }}>
        send image
      </button>

      {photo && <img src={photo} width="300" height="500"/>}

      <input value={text} onChange={(e) => {
        setText(e.target.value);
        socket.emit('text', e.target.value);
      }}/>

      <b>text from any user: {socketText}</b>
    </div>
  );
}

export default App;
