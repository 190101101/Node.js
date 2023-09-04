const mongodb = require('mongodb');
const client = mongodb.MongoClient;

require('dotenv').config({
	debug:true,
	override:true
})

client.connect(process.env.DB_URI, (err, db) => {
	console.log('err', err);
	console.log('db', db);
	const mydb = db.db('mydb', {logger:(l) => {
		console.log('l', l);
	}});

	mydb.createCollection('authors').then((r) => {
		console.log('r', r);
	});
})

