const client = require('./db');

const collection = client.db('mydb').collection('users');

// create collection
client.db('mydb').createCollection('users3').then(res => {
	console.log('res', res);
}).then((res) => {
	console.log('res', res);
});

// create db and  collection
client.db('mydb2').createCollection('users3').then(res => {
	console.log('res', res);
}).then((res) => {
	console.log('res', res);
});

// insert
collection.insertOne({
	name:'cookie',
	surname: 'cookies',
	books: [
		{name: 'php'},
		{name: 'javascript'},
	]
}).then(res => {
	console.log('res', res);
});


