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

Animal.findById('64e3a6b64d3ff686e3d910a2').then((res) => {
	console.log(res);
})

Animal.find({}).then((res) => {
	console.log(res);
})

Animal.findOne({name: 'kedi'}).then((res) => {
	console.log(res);
})

Animal.where('name').equals('kedi').then((res) => {
	console.log(res);
})

Animal.find({
	$and:[
		{$or:[
			{name:'kedi'}, 
			{_id:'64e3a56b7836b3183555d04c'}
		]}
	]
}).then((res) => {
	console.log(res);
})