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

Animal.find({
	$or: [
		{name: 'kedi'},
		{_id: '64e3d67dec4b9700072e0606'}
	]
}).then((r) => {
	res.json(r);
})

Animal.findByIdAndUpdate({_id:'64e3a56b7836b3183555d04c'}, {
	name: 'updated kedikus'
}).then((res) => {
	console.log(res);
});

Animal.updateOne({_id:'64e3a56b7836b3183555d04c'}, {
	name: 'updated kedikus 2'
}).then((res) => {
	console.log(res);
});

Animal.updateMany(
	{isActive:false}, 
	{isActive:true}
).then((res) => {
	console.log(res);
});

Animal.findByIdAndDelete('64e3a56b7836b3183555d04c').then((res) => {
	console.log(res);
});

Animal.findOneAndDelete({_id: '64e3a6b64d3ff686e3d910a1'}).then((res) => {
	console.log(res);
});

Animal.deleteOne({_id: '64e3a6b64d3ff686e3d910a2'}).then((res) => {
	console.log(res);
});

Animal.deleteMany({status: 0}).then((res) => {
	console.log(res);
});

Animal.find({}, 'family').then((res) => {
	console.log(res);
});

Animal.find().select('family').limit(3).skip(4).then((res) => {
	console.log(res);
});

Animal.find().select('family').limit(3).skip(4).sort({family:'desc'}).then((res) => {
	console.log(res);
});