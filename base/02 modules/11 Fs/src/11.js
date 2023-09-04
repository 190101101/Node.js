const fs = require('fs');

fs.readdir('./', async (err, files) => {
	console.log(files);
});

console.log('exists:', fs.existsSync('1.js'));
console.log('exists:', fs.existsSync('z/x'));

fs.stat('1.js', (err, stats) => {
	console.log(stats);
});
