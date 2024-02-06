const client = require('socket.io-client');

io = client('http://localhost:3000');

io.on('connection', (data) => {
    console.log(data);
})

io.on('time', (time) => {
    console.log(time);
});

setTimeout(() => {
    io.emit('client', 'hello server');
}, 3000)

io.on('answer', (data) => {
    console.log(data);
});
