exports.getAllCountries = (req, res) => {
	try{
		const countries = require('../jsons/countries.json');
		return countries;
	}catch(err){
		return err;
	}
}