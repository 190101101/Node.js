const mongoose = require('mongoose');

const conn = () => {
	mongoose.connect('mongodb+srv://HdivLLtP2S0hy2mv:dMT85n2J90YufqZp@node.468w3f9.mongodb.net/?retryWrites=true&w=majority', {
		dbName: 'mydb',
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => {
		console.log('ok');
	}).catch((err) => {
		console.log('err: ', err);
	});
}

// exports.module = conn;

conn();