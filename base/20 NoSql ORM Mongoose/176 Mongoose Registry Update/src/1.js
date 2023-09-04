const {connectMongoDB } = require('./db/db');
const Animal = require('./db/animal');

connectMongoDB().then(() => {

/*
	Animal.findOne({_id:'64e3a56b7836b3183555d04c'}).then((res) => {
		console.log(res);
	});
*/

	Animal.updateMany(
		{age:2}, 
		{age:3}
	).then((res) => {
		console.log(res);
	});

});

