const fs = require('fs');

fs.mkdir('z/x/c', {recursive:true}, (err) => {
	console.log(err);
});
