const client = require('./db/db');

const collection = client.db('mydb').collection('users');

collection.findOne({name: 'cookie'}).then((res) => {
	console.log(res);
});
