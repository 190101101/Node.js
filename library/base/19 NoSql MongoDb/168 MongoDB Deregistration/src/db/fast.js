const client = require('./db');
const collection = client.db('mydb').collection('users');

const fastDelete = (p1) => {
	collection.deleteMany({name: p1}).then((res) => {
		console.log(res);
	});
}

const fastInsert = () => {
	collection.insertOne({
		name: 'cookies',
		surname: 'kikusi'
	}).then((res) => {
		console.log(res);
	});
}

module.exports = {
	fastDelete,
	fastInsert
}