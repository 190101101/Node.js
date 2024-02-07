const {spawn, exec} = require('child_process');

const hello = exec('node hello.js');

hello.stdout.on('data', (data) => {
	console.log(data);
});