import React, { useState, useEffect } from "react";
import { connectWebSocket, socket } from "./client";

const initialState = {
  message: "",
  user: "",
};

const App = () => {
  const [socketId, setSocketId] = useState();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    connectWebSocket();
    socket.on("onConnect", (data) => {
      setSocketId(data);
    });

    /*
    socket.on("privateMessage", (data) => {
      console.log(data);
    });
    */

    socket.on("publicMessage", (data) => {
      console.log(data);
    });

  }, [setSocketId]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    socket.emit("publicMessage", {
      id: socketId,
      message: values.message,
      user: values.user,
    });

    setValues(initialState);
  };

  return (
    <div>
      <h1>hello cookie</h1>
      <h3>id: {socketId}</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="message"
          placeholder="message"
          value={values.message}
        />
        <input
          onChange={onChange}
          type="text"
          name="user"
          placeholder="user socket"
          value={values.user}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default App;
