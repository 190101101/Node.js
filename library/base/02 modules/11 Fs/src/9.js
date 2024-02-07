const fs = require('fs');

fs.rmdir('z', {recursive:true}, (err) => {
	console.log(err);
});
