const Person = require('../models/persons.model');
const personDal = require('../dal/index');
const personDto = require('../dto/person.dto');
const utils = require('../utils/index');
const fileService = require('./file.service');

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
		const json = await personDal.person.updateById(id, { avatar: str });

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
