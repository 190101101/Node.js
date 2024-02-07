import client from "socket.io-client";

const server = "http://localhost:19101";
let socket;
const all = [];

const connectWebSocket = () => {
  socket = client(server, {
    reconnectionDelay:3000,
    timeout:5000,
    path: "/my-custom-path/",
    extraHeaders: {
      "my-custom-header": "1234",
    },
  });
};

export { connectWebSocket, socket, all };
