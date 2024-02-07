const ps = require('process');

ps.on('beforeExit', () => {
	console.log('beforeExit');
});

ps.on('exit', () => {
	console.log('exit');
});

console.log('hello');
