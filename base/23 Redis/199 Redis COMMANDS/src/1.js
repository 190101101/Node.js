const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {

	client.set('GET', 'mydata').then((v) => {
		console.log(v);
	});

	client.sendCommand(['GET', 'mydata']).then((r) => {
		console.log(r);
	});

	client.sendCommand(['PING']).then((r) => {
		console.log(r);
	})

}).catch((err) => {
	console.log('err:', err);
})
