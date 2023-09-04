const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const titleService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllTitles = async (req, res) => {
	try{
		const json = await titleService.title.getAllTitles();

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

exports.getTitleById = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const json = await titleService.title.findTitleById(req);

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

exports.createTitle = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		console.log(123);

		const json = await titleService.title.createTitle(req);

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

exports.updateTitle = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const json = await titleService.title.updateTitle(req);

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

exports.deleteTitleById = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const json = await titleService.title.deleteTitleById(req);

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
