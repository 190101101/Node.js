const {spawn, exec} = require('child_process');

const myEcho = spawn('cmd.exe', ['/c', 'mkdir 123']);

myEcho.stdout.on('data', (data) => {
	console.log(data.toString());
});