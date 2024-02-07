const readline = require('readline');
const ps = require('process');
const c = require('ansi-colors');

const rl = readline.createInterface({
	input: ps.stdin,
	output: ps.stdout
});

rl.question('enter first number: ', (num1) => {
	rl.question('enter second number: ', (num2) => {
		const result = Number(num1) + Number(num2);
		console.log(c.bold.red(`total:`), c.bold.green(`${result}`));
		rl.close();
	});
});