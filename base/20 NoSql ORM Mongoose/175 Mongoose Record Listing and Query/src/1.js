const {connectMongoDB } = require('./db/db');
const Animal = require('./db/animal');

connectMongoDB().then(() => {

	const animal = new Animal({
		name: 'kedi 33',
		family: 'kedikus 33',
		age: 2,
		live_area: ['home', 'street'],
	});

	animal.save().then((res) => {
		console.log(res);
	});
});

