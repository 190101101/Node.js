require("dotenv").config();
const socketIO = require("./socket");
const express = require("express");
const app = express();

const router = express.Router();

app.use(router);

const server = app.listen(19101, () => {
  console.log(`http://localhost:19101`);
});

const io = socketIO.init(server);

io.on("connection", (socket) => {
  console.log(`connected socket ${socket.id}`);
  socket.emit("onConnect", socket.id);

  socket.on("message", (data) => {
    socket.to(data.user).emit("privateMessage", {
      from: data.id,
      message: data.message,
    });
  });

  socket.on("publicMessage", (data) => {
    if(data.id !== window.socketId){
      console.log(data);
    }
    // socket.broadcast.emit("publicMessage", data);
    io.sockets.emit("publicMessage", data);
  });
});
