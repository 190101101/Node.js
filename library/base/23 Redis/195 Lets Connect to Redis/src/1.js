const {createClient} = require('redis');

const client = createClient();

client.connect().then((res) => {
	console.log('res:', res);
}).catch((err) => {
	console.log('err:', err);
})
