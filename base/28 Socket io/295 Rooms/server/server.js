require("dotenv").config();
const socketIO = require("./socket");
const express = require("express");
const app = express();

const router = express.Router();

app.use(router);

const server = app.listen(19101, () => {
  console.log(`http://localhost:19101`);
});

let users = [];
let rooms = {
  roomA: [],
  roomB: [],
};

const io = socketIO.init(server);

io.on("connection", (socket) => {
  console.log(`connected socket ${socket.id}`);
  socket.emit("onConnect", socket.id);

  users.push({ socketId: socket.id });

  socket.on("publicMessage", (data) => {
    io.sockets.emit("publicMessage", data);
    console.log(data);
  });

  socket.on("join room", (roomName) => {
    rooms[roomName].push(socket.id);
    socket.join(roomName);
    io.sockets.emit("joinedRoom", rooms);
  });

  socket.on("message room", (data) => {
    io.to(data.room).emit("room message", data.message);
  });

  socket.on("disconnect", (reason) => {
    let roomA = rooms.roomA.filter((user) => user !== socket.id);
    rooms = { ...rooms, roomA: roomA };

    io.sockets.emit("joinedRoom", rooms);
  });
});
