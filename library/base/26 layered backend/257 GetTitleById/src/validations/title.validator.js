const {body, query, param} = require('express-validator');

const titleValidator = {
	validateCreateTitle(){
		return [
			body('name').not().isEmpty({ignore_whitespace:true}),
		]
	},
    validateUpdateTitleById(){
		return [
            param('id').isMongoId().withMessage('wrong id'),
			body('name').not().isEmpty({ignore_whitespace:true}),
		]
	},
	validateDeleteById(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
	
    validateFindById(){
        return [
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
}

module.exports = titleValidator;