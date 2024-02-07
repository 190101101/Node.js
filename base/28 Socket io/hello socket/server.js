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
  console.log(socket.id);
  io.emit("server", `hello user: ${socket.id}`);
});
