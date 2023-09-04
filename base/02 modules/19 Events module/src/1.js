const events = require('events');

const eventsEmitter = new events.EventEmitter();

const startListener = (data) => {
	console.log('start:', data);
};

eventsEmitter.addListener('start', startListener);

eventsEmitter.addListener('start', (data) => {
	console.log('data:', data);
});

eventsEmitter.on('end', (data) => {
	console.log('end:', data);
});

const forloop = () => {
	eventsEmitter.emit('start', Date.now());
	for(let i = 0; i < 1000; i++){}
	eventsEmitter.emit('end', Date.now());
}

forloop();