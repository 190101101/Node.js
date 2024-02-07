import React, { useState, useEffect } from "react";
import { connectWebSocket, socket } from "./client";

const App = () => {
  const [socketId, setSocketId] = useState(false);

  useEffect(() => {
    connectWebSocket();
    socket.on("onConnect", (data) => {
      setSocketId(data);
      console.log(socketId);
      console.log(socket);
    });
  }, [setSocketId]);

  return (
    <div>
      <h1>id: {socketId}</h1>
      <button
        onClick={() => {
          socket.emit("publicMessage", {
            id: socketId,
            message: Date.now(),
          });
        }}
        type="submit"
      >
        send
      </button>

      <button onClick={() => socket.emit("join room", "roomA")} type="submit">
        room A
      </button>

      <button
        onClick={() => socket.emit("message room", { room: "roomA", message: "hello" })}
        type="submit"
      >
        send message to room A
      </button>
    </div>
  );
};

export default App;
