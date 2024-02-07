const express = require('express');
const {validationResult} = require('express-validator');
const validateUser = require('./validators.middleware');

const app = express();
const router = express.Router();
app.use(express.json());

router.post('/create', validateUser(), (req, res) => {
	const {email, password} = req.body;

	const errors = validationResult(req);
	// console.log(errors.array({onlyFirstError:true}));
	console.log(errors.array());

	if(errors.isEmpty()){
		res.json({email, password}).status(200);
	}
	else{
		res.json(errors.array()).status(404);
	}
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000')
});

/*
{
	"email":"cookie",
	"password": "12"
}
*/