const qrcode = require('qrcode-terminal');
const readline = require('readline');
const ps = require('process');

const rl = readline.createInterface({
	input: ps.stdin,
	output: ps.stdout,
});

rl.question("Qr ne icin olusturulsun ? \r\n", (ans) => {
	qrcode.generate(ans, {small:true});
	rl.close();
});