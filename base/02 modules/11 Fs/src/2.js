const fs = require('fs');


for (let i = 0; i < 10; i++){
	fs.appendFile('index.txt', 'hello world\n', (err) => {
		console.log('done', err);
	});
}

