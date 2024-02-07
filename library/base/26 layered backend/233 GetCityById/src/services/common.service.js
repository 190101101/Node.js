exports.getAllCountries = (req, res) => {
	try{
		const countries = require('../jsons/countries.json');
		return countries;
	}catch(err){
		return err;
	}
}

exports.getCityByCountryId = (id) => {
	try{
		const data = require('../jsons/cities.json');
		const finded = data.filter(item => item.country_id === String(id));
		return finded;
	}catch(err){
		return err;
	}
}