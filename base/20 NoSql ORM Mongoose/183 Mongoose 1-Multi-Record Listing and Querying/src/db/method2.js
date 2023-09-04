country.save().then((res) => {
	const team = new Team({
		name: 'besiktas',
		team_year: new Date().getFullYear() - 1903,
		countryId: res._id
	});
	team.save().then((t) => {
		country.teams.push(t);
		country.save().then((r) => {
			console.log('r', r);
		});
	});
});

////////
const country = await Country.findById('64e3ff35ae0f006e8999ace3');

console.log(country);

const team = new Team({
	name: 'fenebahce',
	team_year: new Date().getFullYear() - 1907,
	countryId: country._id
});

team.save().then((t) => {
	country.teams.push(t);
	country.save().then((r) => {
		console.log('r', r);
	});
});

///////

Country.findOne({name: 'turkiye'}).populate({
	path:'teams',
	select:'name team_year',
	match: {
		name: 'besiktas'
	}
}).then((r) => {
	console.log(r);
});