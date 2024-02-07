const db = require('./db');

// const res = db.collection.find({}, {_id: "64e35f37c1ae1180a52d0b99"});
// db.collection.find({}, {_id: "64e36509c1ae1180a52d0b9e"}).toArray().then(r => {
// 	console.log(r)
// });

/*
db.collection.insertOne({
	name:'cookie',
	surname: 'cookies',
	books: [
		{name: 'php'},
		{name: 'javascript'},
	]
}).then(res => {
	console.log('res', res);
});
*/


db.collection.find({}, {_id: "64e365f73255e09ef1c71ebf"}).toArray().then(r => {
	console.log(r)
});
