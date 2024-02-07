const client = require('./db/db');
const fast = require('./db/fast');

const collection = client.db('mydb').collection('users');

collection.find({}).skip(5).limit(3).toArray().then((res) => {
	console.log('then', res);
})
