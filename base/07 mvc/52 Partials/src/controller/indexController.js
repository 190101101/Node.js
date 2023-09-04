const public = 'C:/Users/190101101/Desktop/Node.js/node/example/src/public/';

const Index = (req, res) => {
	res.render('index', {
		title: 'index page',
		number: 300,
		isActive: false,
		myArr:[11,22,33],
		myObj:[
			{id:'kuki'},
			{id:'apsi'},
		]
	});
}

const Users = (req, res) => {
	res.render('users', {
		title: 'users page',
	});
}

const GetParameters = (req, res) => {
	res.render('params', {
		title: 'params page',
		min: req.query.min,
	});
	// http://localhost:3000/bmw/auto/baku?min=1000&max=5000
}

const Post = (req, res) => {
	res.status(201).json({message: 'post success'});
}

const Delete = (req, res) => {
	res.status(201).json({message: 'delete success'});
}

const Put = (req, res) => {
	res.status(201).json({message: 'put success'});
}

const NotFound = (req, res) => {
	res.status(404).json({
		message: 'page not found',
		url: req.url,
		date: Date.now(),
		statusCode: 404
	});
}

module.exports = {
	Index,
	Users,
	GetParameters,
	Post,
	Delete,
	Put,
	NotFound
};