const personDal = require('../dal/index');
const utils = require('../utils/index');

exports.signIn = async (req, res) => {
	try{
		const {email, password} = req.body;
		const encode = utils.helpers.hashToPassword(password);
		const json = await personDal.person.findOne({email, password:encode});

		if(json){
			const token = utils.helpers.createToken(json._id, json.email);

			return {
				id: json._id,
				name: json.name,
				email: json.email,
				token
			}
		}

		return null;

	}catch(error){
		throw new Error(error);
	}
}