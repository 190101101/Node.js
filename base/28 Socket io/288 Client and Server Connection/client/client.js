import React from "react";
import socketClient from "socket.io-client";

const server = "http://localhost:19101";

export const connectWebSocket = () => {
  const socket = socketClient(server);
};
