const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const personService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllPerons = async (req, res) => {}

exports.getPersonById = (req, res) => {}

exports.createPerson = async (req, res) => {
    try{
		const json = await personService.person.createPerson(req);

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

exports.uploadAvatar = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const data = await personService.person.uploadAvatar(req);
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

exports.uploadCv = async (req, res) => {
	try{
		const isInValid = utils.helpers.handleValidation(req);
		if(isInValid){
			res.json({
				...baseResponse, 
				...isInValid
			}).status(StatusCodes.INTERNAL_SERVER_ERROR);
			return;
		}

		const data = await personService.person.uploadCv(req);
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

exports.updatePerson = (req, res) => {}

exports.deletePersonById = (req, res) => {}

exports.singIn = (req, res) => {}

exports.singUp = (req, res) => {}