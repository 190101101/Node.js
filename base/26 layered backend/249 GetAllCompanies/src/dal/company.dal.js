const Company = require('../models/company.model');

const CompanyDataAccess = {
	async create(companyModel){
		return await companyModel.save();
	},

	async updateById(id, body) {
        return await Company.findByIdAndUpdate({ _id: id }, body)
    },

	async listAll() {
        return await Company.find({})
    },
}

module.exports = CompanyDataAccess;