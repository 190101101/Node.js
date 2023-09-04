const {spawn, exec} = require('child_process');

const myEcho = spawn('cmd.exe', ['/c', 'echo hello']);

myEcho.stdout.on('data', (data) => {
	console.log('data:', data.toString());
});