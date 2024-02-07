const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {
	client.setEx('setex', 10, 'testkey with setex').then((v) => {
		console.log(v);
	})

	client.get('setex').then((v) => {
		console.log(v);
	})

	client.del(['mydata', 'mydata2']).then((v) => {
		console.log(v);
	})
}).catch((err) => {
	console.log('err:', err);
})


client.on('connect', () => {
	console.log('connect');
})

client.on('ready', () => {
	console.log('ready');
})

client.on('error', () => {
	console.log('error');
})