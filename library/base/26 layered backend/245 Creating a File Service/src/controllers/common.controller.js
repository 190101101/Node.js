const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const utils = require('../utils/index');
const {validationResult} = require('express-validator');

exports.getAllCountry = (req, res) => {
	const _response = {...baseResponse};
	try{
		const json = commonService.common.getAllCountries(req, res);

		res.json({
			..._response, 
			success:true,
			timestamp: Date.now(),
			code: StatusCodes.ok,
			data: json
		}).status(StatusCodes.ok);

	}catch(error){

		utils.helpers.logToError(error, req);

		res.json({
			..._response, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

exports.getCityByCountryId = (req, res) => {
	const _response = {...baseResponse};
	try{
		const {countryId} = req.params;
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
				timestamp: Date.now(),
				code: StatusCodes.ok,
				data: jsonData
			}).status(StatusCodes.ok);
		}

	}catch(error){

		utils.helpers.logToError(error, req);

		res.json({
			..._response, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}
