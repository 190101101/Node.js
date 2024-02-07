const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const companyService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllCompany = async (req, res) => {
	try{
		const json = await companyService.company.getAllCompany();

		res.json({
			...baseResponse, 
			data:json,
			success:true,
			timestamp:Date.now(),
			code:StatusCodes.CREATED
		}).status(StatusCodes.CREATED);

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

exports.getCompanyById = async (req, res) => {}

exports.createCompany = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const json = await companyService.company.createCompany(req);

		res.json({
			...baseResponse, 
			data:json,
			success:true,
			timestamp:Date.now(),
			code:StatusCodes.CREATED
		}).status(StatusCodes.CREATED);

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

exports.updateCompany = async (req, res) => {}

exports.deleteCompanyById = async (req, res) => {}

exports.uploadLogo = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const data = await companyService.company.uploadLogo(req);
		res.json(data).status(StatusCodes.CREATED);

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