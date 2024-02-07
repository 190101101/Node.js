const fs = require('fs');

fs.open('index3.txt', 'w', (err) => {
	console.log('done', err);
});
