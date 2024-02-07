const helpers = require('../utils/index');
const {StatusCodes} = require('http-status-codes');
const consts = require('../consts/index');

module.exports = (req, res, next) => {
	try{
		if(!req.url.includes('/api/v1/auth/signIn')){
			const token = req.headers.authorization;
			const decodedToken = helpers.helpers.verifyToken(token);

			if(decodedToken.decodedToken === null || 
				decodedToken.decodedToken === undefined){
				return res.status(StatusCodes.UNAUTHORIZED).send({
					message: consts.AUTH.AUTH.UNAUTHORIZATION_MESSAGE
				});
			}

			req.user = decodedToken
			next();
			return
		}

		next();
	}catch(error){
		return res.status(StatusCodes.UNAUTHORIZED).send({
			message: consts.auth.UNAUTHORIZATION_MESSAGE
		});
	}
}

// const token.headers.authorization.split(' ')[1];
// authorization