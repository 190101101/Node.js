router.get('/', (req, res) => {
	Animal.find({}).then((r) => {
		res.json(r);
	})
});

router.get('/user/:id', (req, res) => {
	const {id} = req.params;
	Animal.findById(id).then((r) => {
		res.json(r);
	})
});

router.get('/pager', (req, res) => {
	Animal.find().select('family name').limit(3).skip(2).sort({family:'desc'}).then((r) => {
		res.json(r).status(200);
	})
});

router.get('/where', (req, res) => {
	Animal.where('name').equals(req.query.name).then((r) => {
		res.json(r);
	})
});

router.get('/findByAnimalName', (req, res) => {
	const {name} = req.query;
	Animal.findByAnimalName(name).then((r) => {
		res.json(r);
	})
});

router.put('/update/:id', (req, res) => {
	const {id} = req.params;
	Animal.updateOne({_id: id}, {
		name: 'kedikus update from kedi'
	}).then((r) => {
		res.json(r);
	})
});

router.delete('/delete/:id', (req, res) => {
	const {id} = req.params;
	Animal.findByIdAndDelete(id).then((r) => {
		res.json(r);
	})
});

router.post('/create', (req, res) => {
	const {name, family, age, live_area} = req.body;

	const animal = new Animal({
		name, family, age, live_area
	});

	animal.save().then((r) => {
		res.json(r).status(200);
	})
});

router.post('/createanimals', (req, res) => {
	const {data} = req.body;
	const arr = [];
	for(let i = 0; i < data.length; i++){
		arr.push(
			new Animal({
				name: data[i].name,
				family: data[i].family,
				age: data[i].age,
				live_area: data[i].live_area
			})
		);
	}

	Animal.insertMany(arr).then((r) => {
		res.json(r).status(200);
	})
});

/*

{
	"data":[
		{
			"name":"apsikus 2",
			"family":"apsikikus 2",
			"age":"3",
			"live_area":["pisi"]
		},
		{
			"name":"apsikus 3",
			"family":"apsikikus 3",
			"age":"3",
			"live_area":["pisi"]
		}
	]
}

*/
