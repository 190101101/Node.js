const Company = require('../models/company.model');
const CompanyDal = require('../dal/index');
const CompanyDto = require('../dto/company.dto');
const utils = require('../utils/index');

exports.createCompany = async (req, res) => {
	try{
		const ip = await utils.helpers.getHost();
		const filePath = process.env.FILE_PATH;
		const fileName = req.file.filename;
		const logoString = `${ip}${filePath}${fileName}`;

		const {name, year, description} = req.body;

		company = new Company({
			name, year, description, logo: logoString
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

