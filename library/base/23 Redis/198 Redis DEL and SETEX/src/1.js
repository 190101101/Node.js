const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {
	client.del('mydata').then((v) => {
		console.log(v);
	})
	client.del('mydata2').then((v) => {
		console.log(v);
	})
	client.del('mydata3').then((v) => {
		console.log(v);
	})
	client.del('mydata4').then((v) => {
		console.log(v);
	})
}).catch((err) => {
	console.log('err:', err);
})
