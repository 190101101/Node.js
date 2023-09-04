const Person = require('../models/persons.model');
const personDal = require('../dal/index');
const personDto = require('../dto/person.dto');
const personCompanyDto = require('../dto/person.company.dto');
const personTitleDto = require('../dto/person.title.dto');
const utils = require('../utils/index');
const fileService = require('./file.service');
const titleDal = require('../dal/title.dal');

exports.getAllPersons = async () => {
	try{
		return await personDal.person.listAll({}, [
			{
				path:'company',
				select: 'company _id year name'
			},
			{
				path:'title',
				select: 'title _id name'
			},
		]
		);
	}catch(error){
		throw new Error(error);	
	}
}

exports.listPersonsWithPagination = async (req) => {
	try{
		const {perPage, page, sortby, sortDirection} = req.query;

		return await personDal.person.listAllWithPagination({}, [
			{
				path:'company',
				select: 'company _id year name'
			},
			{
				path:'title',
				select: 'title _id'
			},
		], perPage, perPage*page, {[sortby]:sortDirection});
	}catch(error){
		throw new Error(error);	
	}
}
// http://localhost:3000/api/v1/person/list?perPage=10&page=2&sortby=_id&sortDirection=desc

exports.findPersonById = async (req) => {
	try{
		const {id} = req.params;
		const json = await personDal.person.findById(id);

		return {
			id: json._id,
			name: json.name,
			surname: json.surname,
			birthDate: new Date(json.birthDate),
			gender: json.gender,
			salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
			tcNumber: json.tcNumber,
			email: json.email,
			password: json.password,
			avatar: json.avatar,
			cvFile: json.cvFile,
			country: json.country,
			city: json.city,
			company: json.company,
			title: json.title,
		}


	}catch(error){
		throw new Error(error);
	}
}

exports.createPerson = async (req) => {
	try{

		const {name, surname, birthDate, gender, salary, 
			tcNumber, email, password, avatar, cvFile, 
			country, city, company, title} = req.body;

		const person = new Person(
			{
				name, surname, birthDate, gender, salary, tcNumber, email,
				password: utils.helpers.hashToPassword(password), avatar, 
				cvFile, country, city, company, title
			}
		);

		const json = await personDal.person.create(person);

		const findedTitle = await titleDal.findById(title);
		findedTitle.persons.push(json._id);
		await titleDal.create(findedTitle);

		return {
			id: json._id,
			name: json.name,
			surname: json.surname,
			birthDate: new Date(json.birthDate),
			gender: json.gender,
			salary: json.salary,
			tcNumber: json.tcNumber,
			email: json.email,
			password: json.password,
			avatar: json.avatar,
			cvFile: json.cvFile,
			country: json.country,
			city: json.city,
			company: json.company,
			title: json.title,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.updatePerson = async (req) => {
	try{
		const {id} = req.params;

		console.log(req.body);

		const {name, surname, birthDate, gender, salary, 
			tcNumber, email, password, avatar, cvFile, 
			country, city, company, title} = req.body;

		const person = new Person(
			{
				name, surname, birthDate, gender, salary, tcNumber, email,
				password: utils.helpers.hashToPassword(password), avatar, 
				cvFile, country, city, company, title
			}
		);

		const json = await personDal.person.updateById(id, {
			name, surname, birthDate, gender, salary, tcNumber, email,
			password: utils.helpers.hashToPassword(password), avatar, 
			cvFile, country, city, company, title
		});
		
		return {
			id: json._id,
			name: json.name,
			surname: json.surname,
			birthDate: new Date(json.birthDate),
			gender: json.gender,
			salary: json.salary,
			tcNumber: json.tcNumber,
			email: json.email,
			password: json.password,
			avatar: json.avatar,
			cvFile: json.cvFile,
			country: json.country,
			city: json.city,
			company: json.company,
			title: json.title,
		};
	}catch(error){
		throw new Error(error);
	}
}


exports.findByEmail = async (email) => {
	try{
	
		return await personDal.person.findOne({email});
	}catch(error){
		throw new Error(error);
	}
}

exports.uploadAvatar = async (req, res) => {
	try{
		const {id} = req.query;

		const str = await fileService.uploadImage(req, res);
		const json = await personDal.person.updateById(id, { avatar: str });

		return {
			name: json.name,
			surname: json.surname,
			birthDate: new Date(json.birthDate),
			gender: json.gender,
			salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
			tcNumber: json.tcNumber,
			email: json.email,
			password: json.password,
			avatar: str,
			cvFile: json.cvFile,
			country: json.country,
			city: json.city,
			company: json.company,
			title: json.title,
		}
		
	}catch(error){
		throw new Error(error);
	}
}

exports.uploadCv = async (req, res) => {
	try{
		const {id} = req.query;

		const str = await fileService.uploadCv(req, res);
		const json = await personDal.person.updateById(id, { cvFile: str });

		return {
			id: json._id,
			name: json.name,
			surname: json.surname,
			birthDate: new Date(json.birthDate),
			gender: json.gender,
			salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
			tcNumber: json.tcNumber,
			email: json.email,
			password: json.password,
			avatar: json.avatar,
			cvFile: str,
			country: json.country,
			city: json.city,
			company: json.company,
			title: json.title,
		}
		
	}catch(error){
		throw new Error(error);
	}
}

exports.getCompany = async (req) => {
	try{
		const {id} = req.params;
			
		const json = await personDal.person.findOnePopulate({ _id: id }, {
            path: 'company',
            select: 'company _id year name'
        })

		return {
			...personCompanyDto,
			name: json.name,
			year: json.year,
			id: json._id,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.getTitle = async (req) => {
	try{
		const {id} = req.params;
			
		const json = await personDal.person.findOnePopulate({ _id: id }, {
            path: 'title',
            select: 'title _id year name'
        })

		return {
			...personTitleDto,
			name: json.name,
			id: json._id,
		};

	}catch(error){
		throw new Error(error);
	}
}

exports.deletePersonById = async (req) => {
	try{
		const {id} = req.params;
		const findedPerson = await personDal.person.findById(id);
		const isDeletedAvatar = utils.helpers.deleteFromDisk(findedPerson.avatar ? findedPerson.avatar.split('/uploads/')[1] : '');
		const isDeletedCv = utils.helpers.deleteFromDisk(findedPerson.cvFile ? findedPerson.cvFile.split('/uploads/')[1] : '');

		if(isDeletedAvatar && isDeletedCv){
			const json = await personDal.person.deleteById(id);
			return {
				...personDto,
				name: json.name,
				surname: json.surname,
				birthDate: new Date(json.birthDate),
				gender: json.gender,
				salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
				tcNumber: json.tcNumber,
				email: json.email,
				password: json.password,
				avatar: json.avatar,
				cvFile: json.cvFile,
				country: json.country,
				city: json.city,
				company: json.company,
				title: json.title,
			}
		}

		throw new Error('file delete wrong');

	}catch(error){
		throw new Error(error);
	}
}

exports.updateAvatar = async (req, res) => {
	try{
		const {id} = req.query;
		const str = await fileService.uploadImage(req, res);

		const findedPerson = await personDal.person.findById(id);
		const isDeleted = utils.helpers.deleteFromDisk(findedPerson.avatar ? findedPerson.avatar.split('/uploads/')[1] : '');

		console.log(findedPerson);
		console.log(isDeleted);

		if(isDeleted){
			const json = await personDal.person.updateById(id, { avatar: str });
			return {
				...personDto,
				name: json.name,
				surname: json.surname,
				birthDate: new Date(json.birthDate),
				gender: json.gender,
				salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
				tcNumber: json.tcNumber,
				email: json.email,
				password: json.password,
				avatar: str,
				cvFile: json.cvFile,
				country: json.country,
				city: json.city,
				company: json.company,
				title: json.title,
			}
		}
		throw new Error('file delete wrong');
		
	}catch(error){
		throw new Error(error);
	}
}

exports.updateCv = async (req, res) => {
	try{
		const {id} = req.query;
		const str = await fileService.uploadCv(req, res);

		const findedPerson = await personDal.person.findById(id);
		const isDeleted = utils.helpers.deleteFromDisk(findedPerson.cvFile ? findedPerson.cvFile.split('/uploads/')[1] : '');

		if(isDeleted){
			const json = await personDal.person.updateById(id, { cvFile: str });
			return {
				...personDto,
				name: json.name,
				surname: json.surname,
				birthDate: new Date(json.birthDate),
				gender: json.gender,
				salary: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'YTL' }).format(json.salary),
				tcNumber: json.tcNumber,
				email: json.email,
				password: json.password,
				avatar: json.avatar,
				cvFile: str,
				country: json.country,
				city: json.city,
				company: json.company,
				title: json.title,
			}
		}
		throw new Error('file delete wrong');
		
	}catch(error){
		throw new Error(error);
	}
}
