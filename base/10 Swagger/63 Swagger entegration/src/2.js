const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

let users = [
	{id:1, name:'cookie', age:7},
	{id:2, name:'apsi', age:14},
	{id:3, name:'ketty', age:2},
	{id:4, name:'pepi', age:1},
];

router.get('/users/list', (req, res) => {
	res.json(users).status(200);
});

router.get('/users/get/:id', (req, res) => {
	const {id} = req.params;
	const user = users.find((item) => item.id !== id);
	res.json(user).status(200);
});


router.post('/users/create', (req, res) => {
	users.push(req.body);
    res.json(users).status(200);
});

router.put('/users/update/:id', (req, res) => {

	const id = Number(req.params.id);
	const {name, age} = {...req.body}
	const user = users.findIndex(item => item.id === id);

	if (user !== -1) {
	  users[user].name = name ? name : users[user].name;
	  users[user].age = age ? age : users[user].age;
	}
	res.json(user);
});

router.delete('/users/delete/:id', (req, res) => {
	const {id} = req.params;
	users = users.filter((item) => {
		return item.id.toString() !== id
	})
	res.json(users).status(200);
});


app.use(router);

app.listen(process.env.PORT || 3000, () => {
	console.log('http://localhost:3000');
});
