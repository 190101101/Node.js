const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllCountry = (req, res) => {
	try{
		const json = commonService.common.getAllCountries(req, res);

		baseResponse.data = json;
		baseResponse.success = true;
		baseResponse.timestamp = Date.now();
		baseResponse.code = StatusCodes.ok;

		res.json(baseResponse);
	}catch(err){
		return err;
	}
}

exports.getCityByCountryId = (req, res) => {
	const {countryId} = req.params;
	const jsonData = commonService.common.getCityByCountryId(countryId);

	baseResponse.data = jsonData;
	baseResponse.success = true;
	baseResponse.timestamp = Date.now();
	baseResponse.code = StatusCodes.ok;

	res.json(baseResponse);
}
