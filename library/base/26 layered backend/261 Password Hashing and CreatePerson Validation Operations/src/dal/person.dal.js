const Person = require('../models/persons.model');

const PersonDataAccess = {
	async create(personModel){
		return await personModel.save();
	},

	async updateById(id, body) {
        return await Person.findByIdAndUpdate({ _id: id }, body)
    },

	async listAll() {
        return await Person.find({});
    },

	async deleteById(id) {
        return await Person.findByIdAndDelete(id);
    },

	async findById(id) {
        return await Person.findById(id);
    },
}

module.exports = PersonDataAccess;