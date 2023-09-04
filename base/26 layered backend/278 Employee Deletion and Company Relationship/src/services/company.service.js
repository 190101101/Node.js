const Company = require('../models/company.model');
const companyDal = require('../dal/index');
const companyDto = require('../dto/company.dto');
const utils = require('../utils/index');
const fileService = require('./file.service');

exports.createCompany = async (req) => {
	try{
		const {name, year, description} = req.body;

		const company = new Company({
			name, 
			year, 
			description,
			logo: ''
		});

		const json = await companyDal.company.create(company);
		
		return {
			...companyDto,
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

exports.updateCompany = async (req) => {
	try{
		const {id} = req.params;
		const {name, year, description} = req.body;
		const json = await companyDal.company.updateById(id, {name, year, description});
		
		return {
			...companyDto,
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


exports.findCompanyById = async (req) => {
	try{
		const {id} = req.params;
		const json = await companyDal.company.findById(id);

		return {
			...companyDto,
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

		const str = await fileService.uploadImage(req, res);
		const json = await companyDal.company.updateById(id, { logo: str });

		return {
			...companyDto,
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

exports.updateLogo = async (req, res) => {
	try{
		const {id} = req.query;
		const str = await fileService.uploadImage(req, res);

		const findedCompany = await companyDal.company.findById(id);
		const isDeleted = utils.helpers.deleteFromDisk(findedCompany.logo ? findedCompany.logo.split('/uploads/')[1] : '');

		if(isDeleted){
			const json = await companyDal.company.updateById(id, { logo: str });
			return {
				...companyDto,
				name: json.name,
				logo: str,
				year: json.year,
				description: json.description,
				id: json._id,
				createdAt: json.createdAt,
			}
		}
		throw new Error('file delete wrong');
		
	}catch(error){
		throw new Error(error);
	}
}

exports.getAllCompany = async () => {
	try{
		return await companyDal.company.listAll();
	}catch(error){
		throw new Error(error);
	}
}

exports.deleteCompanyById = async (req) => {
	try{
		const {id} = req.params;
		const findedCompany = await companyDal.company.findById(id);
		const isDeleted = utils.helpers.deleteFromDisk(findedCompany.logo ? findedCompany.logo.split('/uploads/')[1] : '');

		if(isDeleted){
			const json = await companyDal.company.deleteById(id);
			
			return {
				...companyDto,
				name: json.name,
				logo: json.logo,
				year: json.year,
				description: json.description,
				id: json._id,
				createdAt: json.createdAt,
				updatedAt: json.updatedAt,
			};
		}

		throw new Error('file delete wrong');

	}catch(error){
		throw new Error(error);
	}
}
