const {body, param} = require('express-validator');

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
			})

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

module.exports = {
	validateUser,
	getUserById
};