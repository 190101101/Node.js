const Company = require('../models/company.model');
const CompanyDal = require('../dal/index');
const CompanyDto = require('../dto/company.dto');

exports.createCompany = async (req, res) => {
	try{

		const {name, year, description, logo} = req.body;

		company = new Company({
			name, year, description, logo
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

