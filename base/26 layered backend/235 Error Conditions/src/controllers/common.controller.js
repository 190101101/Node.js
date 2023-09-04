const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllCountry = (req, res) => {
	try{
		const json = commonService.common.getAllCountries(req, res);

		baseResponse.error = false;
		baseResponse.data = json;
		baseResponse.success = true;
		baseResponse.timestamp = Date.now();
		baseResponse.code = StatusCodes.ok;

		res.json(baseResponse);
		
	}catch(error){
		baseResponse.error = true;
		baseResponse.data = null;
		baseResponse.success = false;
		baseResponse.timestamp = Date.now();
		baseResponse.code = StatusCodes.INTERNAL_SERVER_ERROR;
		baseResponse.message = error.message;
		res.json(baseResponse).status(StatusCodes.INTERNAL_SERVER_ERROR);
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
