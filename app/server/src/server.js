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
  // console.log(socket.handshake.headers)
  socket.on('disconnect', (reason) => {
    console.log(`disconnected ${socket.id}`);
  })

  socket.on('disconnecting', (reason) => {
    console.log(`disconnecting ${reason}`);
  });

  setInterval(() => {
    socket.emit('time', `time: ${new Date()}`);
  }, 1000)
});
