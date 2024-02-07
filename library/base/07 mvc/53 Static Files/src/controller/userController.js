const public = 'C:/Users/190101101/Desktop/Node.js/node/example/src/public/';

const User = (req, res) => {
	res.render('users', {
		title: 'users page',
	});
}
module.exports = {
	User,
};