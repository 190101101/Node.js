const timers = require('timers');

timers.setInterval(() => {
	console.log(new Date());
}, 1000);