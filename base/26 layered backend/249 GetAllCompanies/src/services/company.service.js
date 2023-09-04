const Company = require('../models/company.model');
const CompanyDal = require('../dal/index');
const CompanyDto = require('../dto/company.dto');
const utils = require('../utils/index');
const fileService = require('./file.service');

exports.createCompany = async (req) => {
	try{
		const {name, year, description} = req.body;

		company = new Company({
			name, 
			year, 
			description,
			logo: ''
		});

		const json = await CompanyDal.company.create(company);
		
		return {
			...CompanyDto,
			name: json.name,
			logo: json.logo,
			year: json.year,
			description: json.description,
			id: json._id,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.uploadLogo = async (req, res) => {
	try{
		const {id} = req.query;

		const str = await fileService.uploadFile(req, res);
		const json = await CompanyDal.company.updateById(id, { logo: str });

		return {
			...CompanyDto,
			name: json.name,
			logo: str,
			year: json.year,
			description: json.description,
			id: json._id,
			createdAt: json.createdAt,
		}
		
	}catch(error){
		throw new Error(error);
	}
}

exports.getAllCompany = async () => {
	try{
		return await CompanyDal.company.listAll();
	}catch(error){
		throw new Error(error);
	}
}
