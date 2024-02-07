const {connectMongoDB } = require('./db/db');
const Country = require('./db/country');
const Team = require('./db/teams');

connectMongoDB().then(async () => {

	Country.findOne({name: 'turkiye'}).populate({
		path:'teams',
		select:'name team_year',
		match: {
			name: 'besiktas'
		}
	}).then((r) => {
		console.log(r);
	})

});

