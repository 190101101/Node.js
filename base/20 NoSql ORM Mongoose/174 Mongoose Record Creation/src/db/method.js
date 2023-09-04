const animal = new Animal({
	name: 'kedi 3',
	family: 'kedikus 3',
	age: 2,
	live_area: ['home', 'street'],
});

Animal.findByAnimalName('kedi');
Animal.find().byFamily('kedikus');
animal.animalFamily = 'kedi kedikus';
console.log(animal.animalFamily);

animal.save().then((res) => {
	console.log(res);
})

Animal.insertMany(animals).then((res) => {
	console.log(res);
})