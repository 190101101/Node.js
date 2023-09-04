const baseResponse = require('../dto/baseResponse.dto');
const utils = require('../utils/index');
const commonService = require('../services/index');
const {StatusCodes} = require('http-status-codes');
const multer = require('multer');
const upload = require('../middleware/singlefileupload.middleware');

exports.getAllCompany = (req, res) => {}

exports.getCompanyById = (req, res) => {}

exports.createCompany = async (req, res) => {
	try{

		upload(req, res, async (err) => {
			if(err instanceof multer.MulterError){

				utils.helpers.logToError(err, req, req.file ? req.file?.filename : '');

				res.json({
					...baseResponse, 
					success:false,
					error:true,
					timestamp: Date.now(),
					message: err.message,
					code: StatusCodes.INTERNAL_SERVER_ERROR,
				}).status(StatusCodes.INTERNAL_SERVER_ERROR);

				return
			}else if(err){
				utils.helpers.logToError(err, req, req.file ? req.file?.filename : '');

				res.json({
					...baseResponse, 
					success:false,
					error:true,
					timestamp: Date.now(),
					message: err.message,
					code: StatusCodes.INTERNAL_SERVER_ERROR,
				}).status(StatusCodes.INTERNAL_SERVER_ERROR);		

				return;
			}

			const json = await commonService.company.createCompany(req, req.file);

			res.json({
				...baseResponse, 
				data:json,
				success:true,
				timestamp:Date.now(),
				code:StatusCodes.CREATED
			}).status(StatusCodes.CREATED);

		});	
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

exports.updateCompany = (req, res) => {}

exports.deleteCompanyById = (req, res) => {}