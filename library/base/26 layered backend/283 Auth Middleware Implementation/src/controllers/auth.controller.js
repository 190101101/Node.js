const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const authService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.signIn = async (req, res) => {
	try{
		const json = await authService.auth.signIn(req);

		res.json({
			...baseResponse, 
			data:json,
			success:true,
			timestamp:Date.now(),
			code:StatusCodes.OK
		}).status(StatusCodes.OK);

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

exports.signUp = (req, res) => {

}
