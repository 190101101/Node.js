import client from "socket.io-client";

const server = "http://localhost:19101";
let socket;

const logToConsole = (data) => {
  console.log('data', data);
}

const connectWebSocket = () => {
  socket = client(server, {
    reconnectionDelay:3000,
    timeout:5000,
    path: "/my-custom-path/",
    extraHeaders: {
      "my-custom-header": "1234",
    },
  });

  socket.once("time", logToConsole);
  // socket.off("time", logToConsole);
  // socket.removeListener('time');
  socket.removeAllListeners('time');
};

export { connectWebSocket, socket };
