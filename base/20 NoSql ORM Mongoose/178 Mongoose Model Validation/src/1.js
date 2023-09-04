const {connectMongoDB } = require('./db/db');
const Animal = require('./db/animal');

connectMongoDB().then(() => {

/*
	Animal.findOne({_id:'64e3d62190f230cf3870d44b'}).then((res) => {
		console.log(res);
	});
*/

	const animal = new Animal({
		name: 'kedi 222',
		family: 'kedikus 222',
		age: 2,
		live_area: ['home', 'street'],
	});

	animal.save().then((res) => {
		console.log(res);
	});

	// const errors = animal.validateSync();
	// console.log('errors:', errors);

	// console.log('errors:', errors?.errors['live_area']?.message);
	// console.log('errors:', errors?.errors['family']?.message);


});

