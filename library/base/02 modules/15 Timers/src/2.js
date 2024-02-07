const timers = require('timers');

timers.setTimeout(() => {
	console.log(new Date());
}, 5000);