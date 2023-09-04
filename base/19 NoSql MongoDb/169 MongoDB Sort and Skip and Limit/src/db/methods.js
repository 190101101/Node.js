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


//find
collection.find({}).toArray().then((res) => {
	console.log(res);
});

//where
collection.find({
	$or:[{name:'cookie'}, {name: 'pepi'}]
}).toArray().then((res) => {
	console.log(res);
});


collection.find({
	$or:[{name: {$eq:'cookie'}}, {name: 'pepi'}]
}).toArray().then((res) => {
	console.log(res);
});

//where
collection.findOne({name: 'cookie'}).then((res) => {
	console.log(res);
});

collection.updateOne({name: 'cookie'}, {
	$set:{
		name: 'cookies',
		surname: 'kikusi'
	}
}).then((res) => {
	console.log(res);
});

collection.updateMany({name: 'cookies'}, {
	$set:{
		name: 'cookie',
		surname: 'cookies'
	}
}).then((res) => {
	console.log(res);
});


collection.deleteOne({name: 'cookies'}).then((res) => {
	console.log(res);
});

collection.deleteMany({name: 'cookies'}).then((res) => {
	console.log(res);
});


// ASC, DESC = 1, -1
collection.find().sort({name:-1}).toArray().then((res) => {
	console.log(res);
});

collection.find({}).skip(5).limit(3).toArray().then((res) => {
	console.log('then', res);
})
