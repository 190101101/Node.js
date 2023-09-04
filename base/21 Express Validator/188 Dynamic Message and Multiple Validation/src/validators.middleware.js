const {body} = require('express-validator');

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

module.exports = validateUser;