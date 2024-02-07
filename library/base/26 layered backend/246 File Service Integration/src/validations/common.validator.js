const {param} = require('express-validator');

const commonValidator = {
	validateCountryById(){
		return [
			param('countryId').isLength({min:1, max:4}).withMessage('invalid id format')
		]
	}
}

module.exports = commonValidator;