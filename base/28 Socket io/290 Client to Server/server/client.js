const {io} = require("socket.io-client");

const socket = io("http://localhost:19101");

socket.on("connection", (data) => {
  console.log(data);
});

socket.emit("client", 'hello');
