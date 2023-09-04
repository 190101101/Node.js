const fs = require('fs');


// bu func anlik ishleyir
fs.watchFile('index.txt', (curr, prev) => {
	console.log('curr: ', curr, 'prev:', prev);
});