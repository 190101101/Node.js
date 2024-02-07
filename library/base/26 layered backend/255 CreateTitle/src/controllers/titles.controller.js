const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const titleService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

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
