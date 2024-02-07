const client = require("socket.io-client");

io = client("http://localhost:3000");

io.on("connection", (data) => {
  console.log(data);
});
