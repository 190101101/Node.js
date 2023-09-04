const {connectMongoDB } = require('./db/db');
const Country = require('./db/country');
const Team = require('./db/teams');

connectMongoDB().then(async () => {

	const country = await Country.findById('64e3ff35ae0f006e8999ace3');

	Team.deleteMany({countryId:country._id}).then((r) => {
		console.log(r);
		Country.findByIdAndDelete(country._id).then((c) => {
			console.log(c);
		})
	})

});

