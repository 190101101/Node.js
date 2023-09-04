const dns = require('dns');
const os = require('os');


dns.lookup('google.com', (err, address, family) => {
	console.log('address:', address);
	console.log('family:', family);
});

console.log('local', dns.getServers());


dns.lookup(os.hostname(), (err, add) => {
	console.log(err, add);
})