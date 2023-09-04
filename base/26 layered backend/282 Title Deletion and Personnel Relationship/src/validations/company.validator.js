const {body, query, param} = require('express-validator');

const companyValidator = {
	validateCreateCompany(){
		return [
			body('name').not().isEmpty({ignore_whitespace:true}),
			body('description').not().isEmpty({ignore_whitespace:true}),
			body('year').isNumeric()
		]
	},
    validateUpdateCompanyById(){
		return [
            param('id').isMongoId().withMessage('wrong id'),
			body('name').not().isEmpty({ignore_whitespace:true}),
			body('description').not().isEmpty({ignore_whitespace:true}),
			body('year').isNumeric(),
		]
	},
    validateUploadLogo(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
    validateUpdateLogo(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
	validateDeleteById(){
        return [
            //query idi
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
	
    validateFindById(){
        return [
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
}

module.exports = companyValidator;