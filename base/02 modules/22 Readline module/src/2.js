const readline = require('readline');
const ps = require('process');

const rl = readline.createInterface({
	input: ps.stdin,
	output: ps.stdout,
	prompt: '-->',
})

rl.prompt();

rl.on('line', (line) => {
	switch(line.trim()){
		case 'hello':
			return console.log('have are you?');
		default:
			console.log('i dont understand you.');
			break;
	}
	rl.prompt();
})