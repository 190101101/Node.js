import client from "socket.io-client";

const server = "http://localhost:19101";
let socket;

const connectWebSocket = () => {
  socket = client(server);

  socket.on('hey', (data) => {
    console.log(data);
  })
};

export {connectWebSocket, socket};