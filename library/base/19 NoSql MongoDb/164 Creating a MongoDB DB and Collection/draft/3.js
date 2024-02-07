const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

require('dotenv').config({
	debug: true,
	override: true
});

const uri = process.env.DB_URI;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
	if (err) {
		console.error('Bağlantı hatası:', err);
		return;
	}

	console.log('MongoDB\'ye başarıyla bağlandı');

	const mydb = client.db('mydb'); // Veritabanı adını doğru şekilde belirtmelisiniz.

	mydb.createCollection('authors').then((collection) => {
		console.log('\'authors\' koleksiyonu oluşturuldu:', collection);
	}).catch((createErr) => {
		console.error('Koleksiyon oluşturma hatası:', createErr);
	}).finally(() => {
		client.close(); // Bağlantıyı kapatmayı unutmayın.
	});
});

