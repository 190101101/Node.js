const client = require("socket.io-client");

io = client("http://localhost:19101");

io.on("connection", (data) => {
  console.log(data);
});
