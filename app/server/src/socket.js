const socket = require("socket.io");
let io;

const init = (server) => {
  io = socket(server, {
    path:'/my-custom-path/',
    pingTimeout:30000,
    cors: {
      origin: "*",
      method: ["GET"],
    },
  });
  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("socket not initilize");
  }
  return io;
};

module.exports = {init, socket}