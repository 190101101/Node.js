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

eventsEmitter.once('start', (data) => {
	console.log('once data:', data);
});

const forloop = () => {
	eventsEmitter.emit('start', Date.now());
	for(let i = 0; i < 1000; i++){}
	eventsEmitter.emit('end', Date.now());
}

eventsEmitter.emit('start', Date.now());

// eventsEmitter.removeAllListeners('start');
eventsEmitter.removeListener('start', startListener);
eventsEmitter.setMaxListeners(2);


forloop();