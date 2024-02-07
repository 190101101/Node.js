const commonService = require('../services/index');

exports.getAllCountry = (req, res) => {
	try{
		const json = commonService.common.getAllCountries(req, res);
		res.json(json);
	}catch(err){
		return err;
	}
}

exports.getCityByCountryId = (req, res) => {
	const {countryId} = req.params;
	const jsonData = commonService.common.getCityByCountryId(countryId);
	res.json(jsonData);
}
