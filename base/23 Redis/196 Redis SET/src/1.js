const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {
	console.log('res:', res);
	client.set('mydata', Date.now()).then((v) => {
		console.log(v);
	})
	client.set('mydata2', 'kuki').then((v) => {
		console.log(v);
	})
	client.set('mydata3', JSON.stringify({id: 1, name: 'apsi'})).then((v) => {
		console.log(v);
	})
}).catch((err) => {
	console.log('err:', err);
})
