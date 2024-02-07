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
			console.log('hi');
			rl.close();
			break;
		default:
			console.log('i dont understand you.');
			break;
	}
	rl.prompt();
}).on('close', () => {
	console.log('bye bye');
	ps.exit();
})