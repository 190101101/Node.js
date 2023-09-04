const {body, query} = require('express-validator');

const companyValidator = {
	validateCreateCompany(){
		return [
			body('name').not().isEmpty({ignore_whitespace:true}),
			body('description').not().isEmpty({ignore_whitespace:true}),
			body('year').isNumeric()
		]
	},
    validateUploadLogo(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
	validateDeleteById(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
}

module.exports = companyValidator;