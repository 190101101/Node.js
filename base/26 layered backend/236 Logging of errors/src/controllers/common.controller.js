const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const logger = require('../utils/index');

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

		logger.logger.info(`
			IP ADDRESS: ${req.ip} - 
			PATH: ${req.path} - 
			BODY: ${JSON.stringify(req.body)} -
			PARAMS: ${JSON.stringify(req.params)} -
			QUERY: ${JSON.stringify(req.query)} -
			ERROR TIME: ${Date.now()} - 
			URL: ${req.url} -
			ERROR MESSAGE: ${error.message} - 
			ERROR CALLSTACK: ${JSON.stringify(error)}
		`);

		res.json(baseResponse).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

exports.getCityByCountryId = (req, res) => {
	try{
		const {countryId} = req.params;
		const jsonData = commonService.common.getCityByCountryId(countryId);

		baseResponse.data = jsonData;
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

		logger.logger.info(`
			IP ADDRESS: ${req.ip} - 
			PATH: ${req.path} - 
			BODY: ${JSON.stringify(req.body)} -
			PARAMS: ${JSON.stringify(req.params)} -
			QUERY: ${JSON.stringify(req.query)} -
			ERROR TIME: ${Date.now()} - 
			URL: ${req.url} -
			ERROR MESSAGE: ${error.message} - 
			ERROR CALLSTACK: ${JSON.stringify(error)}
		`);

		res.json(baseResponse).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}
