const {body} = require('express-validator');

const validateUser = () => {
	return [
		body('email').isEmail().withMessage('email bosh olmamalidir'),
		body('password').isLength({min: 3, max: 8}).withMessage('password min 3 - max 8 olmalidir')
	];
}

module.exports = validateUser;