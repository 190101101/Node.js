const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

let data = [
	{ id:1, name:'kuki'},
	{ id:2, name:'apsi'},
];

router.get('/', (req, res) => {
	res.json({message: 'get request'}).status(200);
});

router.get('/users/list', (req, res) => {
	res.json(data).status(200);
});

router.post('/users/create', (req, res) => {
	res.json({meesage:'request post'}).status(200);
});

router.delete('/users/delete/:id', (req, res) => {
	res.json({meesage:'request delete'}).status(200);
});

router.put('/users/update/:id', (req, res) => {
	res.json({meesage:'request update'}).status(200);
});
  
app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});

/*
{
	"id": "3",
	"name": "ketty"
}
*/