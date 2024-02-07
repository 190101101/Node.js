const fs = require('fs');

fs.unlink('index1.txt', (err) => {
	console.log(err);
});

