const client = require('./db');

const collection = client.db('mydb').collection('users');

/*
collection.insertOne({
	name:'cookie',
	surname: 'cookies',
	books: [
		{name: 'python'},
		{name: 'javascript'},
	]
}).then(res => {
	console.log('res', res);
});
*/

collection.insertMany([
	{
		name:'apsi',
		surname: 'apsis',
	},
	{
		name:'pepi',
		surname: 'pepis',
	},
]).then(res => {
	console.log('res', res);
});


