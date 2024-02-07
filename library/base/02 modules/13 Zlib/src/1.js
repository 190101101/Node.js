const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGunzip();
const inp = fs.createReadStream('OpenSSH.zip');

console.log(inp);


inp.on('data', (d) => {
	// console.log(d);
	// console.log(d.toString());
});