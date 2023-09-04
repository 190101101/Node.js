const ps = require('process');
const cp = require('child_process');

cp.exec('tasklist', (err, stdout, stderr) => {
	console.log('-----------');
	console.log(stdout);
})


process.kill(2780); // telegram
