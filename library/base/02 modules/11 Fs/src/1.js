const fs = require('fs');

fs.writeFile('index.txt', 'hello world', (err) => {
	console.log('done', err);
});

fs.writeFileSync('index2.txt', 'hello world 2', (err) => {
	console.log('done', err);
});
