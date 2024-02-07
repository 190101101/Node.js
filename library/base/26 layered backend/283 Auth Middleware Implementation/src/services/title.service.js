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

exports.updateTitle = async (req) => {
	try{
		const {id} = req.params;
		const {name} = req.body;
		const json = await titleDal.title.updateById(id, {name});
		
		return {
			...titleDto,
			name: json.name,
			persons: json.persons,
			id: json._id,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.deleteTitleById = async (req) => {
	try{
		const {id} = req.params;
		const json = await titleDal.title.deleteById(id);

		const persons = await personDal.listAll({title: id});

		for(let i = 0; i < persons.length; i++){
			const findedPerson = await personDal.person.findById(id);
			const isDeletedAvatar = utils.helpers.deleteFromDisk(persons[i].avatar ? persons[i].avatar.split('/uploads/')[1] : '');
			const isDeletedCv = utils.helpers.deleteFromDisk(persons[i].cvFile ? persons[i].cvFile.split('/uploads/')[1] : '');				
		}
		
		await personDal.deleteMultiple({title:id});
		
		return {
			...titleDto,
			name: json.name,
			persons: json.persons,
			id: json._id,
			createdAt: json.createdAt,
			updatedAt: json.updatedAt,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.getPersons = async (req) => {
	try{
		const {id} = req.params;
		const json = await titleDal.title.findOnePopulate({ _id: id }, {
            path: 'persons',
            select: '_id name surname'
        })

		return {
			name: json.name,
			surname: json.surname,
			id: json._id,
		};

	}catch(error){
		throw new Error(error);
	}
}
