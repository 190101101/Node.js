const fs = require('fs');

fs.readFile('index.txt', (err, data) => {
	// console.log(err);
	console.log(data.toString());
});

