import client from "socket.io-client";

const server = "http://localhost:19101";
let socket;

const connectWebSocket = () => {
  socket = client(server, {
    reconnectionDelay:3000,
    timeout:5000,
    path: "/my-custom-path/",
    extraHeaders: {
      "my-custom-header": "1234",
    },
  });

  socket.on("hey", (data) => {
    console.log(data);
  });
};

export { connectWebSocket, socket };
