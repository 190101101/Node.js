const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const logger = require('../utils/index');
const {validationResult} = require('express-validator');

exports.getAllCountry = (req, res) => {
	try{
		const _response = {...baseResponse};
		const json = commonService.common.getAllCountries(req, res);

		baseResponse.error = false;
		baseResponse.data = json;
		baseResponse.success = true;
		baseResponse.timestamp = Date.now();
		baseResponse.code = StatusCodes.ok;

		res.json({
			..._response, 
			success:true,
			error:false,
			timestamp: Date.now(),
			code: StatusCodes.ok,
			data: json
		}).status(StatusCodes.ok);

	}catch(error){
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

		res.json({
			..._response, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
			data: null,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

exports.getCityByCountryId = (req, res) => {
	try{
		const {countryId} = req.params;
		const _response = {...baseResponse};
		const validationErrors = validationResult(req);

		if(validationErrors.isEmpty() === false){
			res.json({
				..._response, 
				success:false,
				error:true,
				timestamp: Date.now(),
				code: StatusCodes.BAD_REQUEST,
				message: 'wrong data',
				validationErrors: validationErrors.array(),
				data:null
			}).status(StatusCodes.BAD_REQUEST);
		}else{

			const jsonData = commonService.common.getCityByCountryId(countryId);

			res.json({
				..._response, 
				success:true,
				error:false,
				timestamp: Date.now(),
				code: StatusCodes.ok,
				data: jsonData
			}).status(StatusCodes.ok);
		}

	}catch(error){

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

		res.json({
			..._response, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
			data: null,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}
