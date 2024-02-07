const {body, query, param} = require('express-validator');

const personValidator = {
	validateCreatePerson(){
		return [
			body('name').not().isEmpty({ignore_whitespace:true}),
			body('surname').not().isEmpty({ignore_whitespace:true}),
			body('birthDate').not().isEmpty({ignore_whitespace:true}),
			body('gender').not().isEmpty({ignore_whitespace:true}),
			body('salary').not().isEmpty({ignore_whitespace:true}).isNumeric(),
			body('tcNumber').not().isEmpty({ignore_whitespace:true}),
			body('email').not().isEmpty({ignore_whitespace:true}),
			body('password').not().isEmpty({ignore_whitespace:true}),
			body('avatar').not().isEmpty({ignore_whitespace:true}),
			body('cvFile').not().isEmpty({ignore_whitespace:true}),
			body('country').not().isEmpty({ignore_whitespace:true}),
			body('city').not().isEmpty({ignore_whitespace:true}),
			body('company').isMongoId().withMessage('wrong id'),
			body('title').isMongoId().withMessage('wrong id'),
		]
	},
    validateUpdatePersonById(){
		return [
            param('id').isMongoId().withMessage('wrong id'),
			body('name').not().isEmpty({ignore_whitespace:true}),
			body('surname').not().isEmpty({ignore_whitespace:true}),
			body('birthDate').not().isEmpty({ignore_whitespace:true}),
			body('gender').not().isEmpty({ignore_whitespace:true}),
			body('salary').not().isEmpty({ignore_whitespace:true}).isNumeric(),
			body('tcNumber').not().isEmpty({ignore_whitespace:true}),
			body('email').not().isEmpty({ignore_whitespace:true}),
			body('password').not().isEmpty({ignore_whitespace:true}),
			body('avatar').not().isEmpty({ignore_whitespace:true}),
			body('cvFile').not().isEmpty({ignore_whitespace:true}),
			body('country').not().isEmpty({ignore_whitespace:true}),
			body('city').not().isEmpty({ignore_whitespace:true}),
			body('company').isMongoId().withMessage('wrong id'),
			body('title').isMongoId().withMessage('wrong id'),
		]
	},
	validateDeleteById(){
        return [
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
	
    validateFindById(){
        return [
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
}

module.exports = personValidator;