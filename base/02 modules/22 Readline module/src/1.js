const readline = require('readline');
const ps = require('process');

const rl = readline.createInterface({
	input: ps.stdin,
	output: ps.stdout,
})

rl.question('what s your name? ', (answer) => {
	console.log(`received: ${answer}`);
	rl.close();
});