const socket = require('socket.io');
let io;

module.exports = {
    init: (server) => {
        io = socket(server, {
            path:'/my-app/src/example/src/lib',
            pingTimeout:30000,
            extraHeaders:{ "my-custom-header":"12345"},
            cors:{
                origin: '*',
                method: ['GET']
            }
        })
        return io;
    },
    getIO:() => {
        if(!io){
            throw new Error('socket not initilize');
        }
        return io;
    }
}