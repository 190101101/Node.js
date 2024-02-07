import client from "socket.io-client";

const server = "http://localhost:19101";
let socket;

const connectWebSocket = () => {
  socket = client(server, {
    reconnectionDelay: 3000,
    timeout: 5000,
    path: "/my-custom-path/",
    extraHeaders: {
      "my-custom-header": "1234",
    },
  });

  socket.on("publicMessage", (data) => {
    console.log(data);
  });

  socket.on("joinedRoom", (data) => {
    console.log(data);
  });

  socket.on("room message", (data) => {
    console.log(data);
  });
};

export { connectWebSocket, socket};
