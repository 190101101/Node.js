const Company = require('../models/company.model');
const CompanyDal = require('../dal/index');

exports.createCompany = async (req, res) => {
	try{
		const {name, year, description, logo} = req.body;

		company = new Company({
			name, year, description, logo
		});

		const json = await CompanyDal.company.create(company);

		console.log('json', json);

	}catch(error){
		throw new Error(error);
	}
}

