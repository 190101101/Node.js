exports.getAllCountries = (req, res) => {
	try{
		const countries = require('../jsons/countries.json');
		return countries;
	}catch(error){
		throw new Error(error);
	}
}

exports.getCityByCountryId = (id) => {
	try{
		const data = require('../jsons/cities.json');
		const finded = data.filter(item => item.country_id === String(id));
		return finded;
	}catch(error){
		return error;
	}
}