const client = require('./db/db');
const fast = require('./db/fast');

const collection = client.db('mydb').collection('users');

collection.deleteOne({name: 'cookies'}).then((res) => {
	console.log(res);
});
