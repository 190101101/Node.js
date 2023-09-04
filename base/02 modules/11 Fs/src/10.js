const fs = require('fs');

fs.opendir('./', async (err, data) => {
	for await(const d of data){
		console.log(
			'name', d.name, 
			'isFile', d.isFile(), 
			'isDirectory', d.isDirectory()
		);
	}
});
