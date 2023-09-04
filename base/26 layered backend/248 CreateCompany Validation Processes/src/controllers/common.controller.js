const baseResponse = require('../dto/baseResponse.dto');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const utils = require('../utils/index');
const {validationResult} = require('express-validator');

exports.getAllCountry = (req, res) => {
	try{
		const json = commonService.common.getAllCountries(req, res);

		res.json({
			...baseResponse, 
			success:true,
			timestamp: Date.now(),
			code: StatusCodes.ok,
			data: json
		}).status(StatusCodes.ok);

	}catch(error){

		utils.helpers.logToError(error, req);

		res.json({
			...baseResponse, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}

exports.getCityByCountryId = (req, res) => {
	try{
		const {countryId} = req.params;
		
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
		}

		const jsonData = commonService.common.getCityByCountryId(countryId);

		res.json({
			...baseResponse, 
			success:true,
			timestamp: Date.now(),
			code: StatusCodes.ok,
			data: jsonData
		}).status(StatusCodes.ok);
		
	}catch(error){

		utils.helpers.logToError(error, req);

		res.json({
			...baseResponse, 
			success:false,
			error:true,
			timestamp: Date.now(),
			message: error.message,
			code: StatusCodes.INTERNAL_SERVER_ERROR,
		}).status(StatusCodes.INTERNAL_SERVER_ERROR);
	}
}
