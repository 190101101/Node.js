const public = 'C:/Users/190101101/Desktop/Node.js/node/example/src/public/';

const Index = (req, res) => {
	res.render('index', {
		title: 'index page',
		number: 300,
		isActive: false,
		myArr:[1,2,3],
		myObj:[
			{id:1},
			{id:2},
		]
	});
}

const GetParameters = (req, res) => {
	/*
	const params = req.params;
	const query = req.query;

	console.log('params:', params);
	console.log('query:', query);
	*/
	res.render('params', {
		title: 'params page',
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
	GetParameters,
	Post,
	Delete,
	Put,
	NotFound
};