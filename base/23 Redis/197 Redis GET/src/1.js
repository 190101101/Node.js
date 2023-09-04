const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {
	client.get('mydata').then((v) => {
		console.log(v);
	})
	client.get('mydata2').then((v) => {
		console.log(v);
	})
	client.get('mydata3').then((v) => {
		console.log(v);
	})
	client.get('mydata4').then((v) => {
		console.log(v);
	})
}).catch((err) => {
	console.log('err:', err);
})
