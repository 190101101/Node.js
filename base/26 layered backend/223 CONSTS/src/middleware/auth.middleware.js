const helpers = require('../utils/helper');
const {StatusCodes} = require('http_status-codes');
const consts = require('../consts/index');

module.exports = (req, res, next) => {
	try{
		// const token.headers.authorization.split(' ')[1];
		const token = req.headers.authorization;
		const decodedToken = helpers.helpers.verifyToken;
		if(decodedToken.decodedToken === null){
			return res.status(StatusCodes.UNAUTHORIZED).send({
				message: consts.auth.UNAUTHORIZATION_MESSAGE
			});
		}

		req.user = decodedToken
		next();

	}catch(error){
		return res.status(StatusCodes.UNAUTHORIZED).send({
			message: consts.auth.UNAUTHORIZATION_MESSAGE
		});
	}
}