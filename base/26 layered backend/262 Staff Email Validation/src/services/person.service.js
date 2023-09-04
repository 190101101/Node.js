const Person = require('../models/persons.model');
const personDal = require('../dal/index');
const personDto = require('../dto/person.dto');
const utils = require('../utils/index');

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
			...personDto,
			id: json._id,
			name: json.name,
			surname: json.surname,
			birthDate: json.birthDate,
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
	
		const json = await personDal.person.findOne({email});
		console.log(json);
		return json;	
	}catch(error){
		throw new Error(error);
	}
}