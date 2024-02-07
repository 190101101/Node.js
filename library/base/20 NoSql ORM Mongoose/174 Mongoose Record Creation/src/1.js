const {connectMongoDB } = require('./db/db');
const Animal = require('./db/animal');

connectMongoDB().then(() => {
	const animals = [
		new Animal({
			name: 'kedi 6',
			family: 'kedikus 6',
			age: 2,
			live_area: ['home', 'street'],
		}),
		new Animal({
			name: 'kedi 7',
			family: 'kedikus 7',
			age: 2,
			live_area: ['home', 'street'],
		})
	];

	Animal.insertMany(animals).then((res) => {
		console.log(res);
	})
});

