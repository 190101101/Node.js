const client = require("socket.io-client");

const io = client("http://localhost:19101");

io.on("server", (data) => {
  console.log(data);
});
