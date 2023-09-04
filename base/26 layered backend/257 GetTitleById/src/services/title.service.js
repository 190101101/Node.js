const Title = require('../models/titles.model');
const titleDal = require('../dal/index');
const titleDto = require('../dto/title.dto');

exports.getAllTitles = async (req) => {
	try{
		const json = await titleDal.title.listAll();
		
		return {
			...titleDto,
			data:json,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.findTitleById = async (req) => {
	try{
		const {id} = req.params;
		const json = await titleDal.title.findById(id);

		return {
			...titleDto,
			name: json.name,
			id: json._id,
			persons: json.persons,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.createTitle = async (req) => {
	try{
		const {name} = req.body;

		const title = new Title({
			name, 
			parsons:[]
		});

		const json = await titleDal.title.create(title);
		
		return {
			...titleDto,
			name: json.name,
			id: json._id,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}
