const timers = require('timers');


console.log('start');
timers.setImmediate(() => {
	console.log(new Date());	
});
console.log('end');
