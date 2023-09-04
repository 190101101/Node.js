const {body, param, query} = require('express-validator');

const validateUser = () => {
	return [
		body('email')
			.isEmail()
			.withMessage('email bosh olmamalidir'),
		body('password')
			.notEmpty({ignore_whitespace:true})
			.withMessage('password bosh olmamalidir')
			.isLength({min: 3, max: 8})
			.withMessage((value, {req, location, path}) => {
				return {value, location, path};
			}).custom((value, {req}) => {
				if(value == 'admin'){
					throw new Error('throw new Error password admin olmamalidir');
				}
				return true;
			}).withMessage('withMessage password admin olmamalidir')

	];
}

const getUserById = () => {
	return [
		param('userid')
			.notEmpty({ignore_whitespace:true})
			.withMessage('id bosh olmamalidir')
			.isLength({max:1})
			.withMessage('length is big')
	];
}

const validateQuery = () => {
	return [
		query('limit').notEmpty().withMessage('limit bosh olmamalidir')
	];
}

module.exports = {
	validateUser,
	getUserById,
	validateQuery
};