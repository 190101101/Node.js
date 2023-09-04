const {connectMongoDB } = require('./db/db');
const Country = require('./db/country');
const Team = require('./db/teams');

connectMongoDB().then(async () => {

	const country = await Country.findById('64e3ff35ae0f006e8999ace3');
	const arr = [...country.teams];

	console.log(arr.pop());

	country.teams = [...arr];
	country.save().then((r) => {
		console.log(r);
	})

/*
	const team = new Team({
		name: 'galatasaray',
		team_year: new Date().getFullYear() - 1905,
		countryId: country._id
	});

	team.save().then((t) => {
		country.teams.push(t);
		country.save().then((r) => {
			console.log('r', r);
		});
	});
*/

});

