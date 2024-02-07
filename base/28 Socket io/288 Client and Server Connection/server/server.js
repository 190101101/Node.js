require("dotenv").config();
const socket = require("socket.io");
const express = require("express");
const app = express();

const router = express.Router();

app.use(router);

const server = app.listen(19101, () => {
  console.log(`http://localhost:19101`);
});

const io = socket(server, {
  cors: {
    origin: "*",
    method: ["GET"],
  },
});

io.on("connection", (socket) => {
  console.log(`connected socket ${socket.id}`);
  // console.log(socket.handshake)
  socket.on('disconnect', (reason) => {
    console.log(`disconnected ${socket.id}`);
  })
});
