const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

let data = [
	{ id:1, name:'kuki'},
	{ id:2, name:'apsi'},
	{ id:3, name:'pepi'},
];

router.get('/', (req, res) => {
	res.json({message: 'get request'}).status(200);
});

router.get('/users/list', (req, res) => {
	res.json(data).status(200);
});

router.post('/users/create', (req, res) => {
	const {id, name} = req.body;
	data.push({id, name});
	res.json(data).status(200);
});

router.delete('/users/delete/:id', (req, res) => {
	const id = req.params.id;
	data = data.filter((item) => {
		return item.id.toString() !== Number(id).toString()
	});
	res.json(data).status(200);
});

router.put('/users/update/:id', (req, res) => {
	const updatedId = Number(req.params.id);
	const updatedName = req.body.name;
	const foundIndex = data.findIndex(item => item.id === updatedId);

	if (foundIndex !== -1) {
	  data[foundIndex].name = updatedName;
	  res.status(200).json(data[foundIndex]);
	} else {
	  res.status(404).json({ error: 'user not found' });
	}
});
  
app.use(router);

app.listen(process.env.PORT || 3000, () => {
	console.log('http://localhost:3000');
});

/*
{
	"id": "3",
	"name": "ketty"
}
*/