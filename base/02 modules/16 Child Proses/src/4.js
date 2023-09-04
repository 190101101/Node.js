const {spawn, exec} = require('child_process');

const desktop = exec('cd C:/Users/190101101/desktop && dir');

desktop.stdout.on('data', (data) => {
	console.log(data);
});