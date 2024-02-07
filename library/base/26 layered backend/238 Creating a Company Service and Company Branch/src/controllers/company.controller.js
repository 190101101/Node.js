const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');

exports.getAllCompany = (req, res) => {}

exports.getCompanyById = (req, res) => {}

exports.createCompany = async (req, res) => {
	const _response = {...baseResponse};
	try{

		const json = await commonService.company.createCompany(req, res);
		res.json({id: 1});

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

exports.updateCompany = (req, res) => {}

exports.deleteCompanyById = (req, res) => {}