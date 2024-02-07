const {body, query, param} = require('express-validator');
const personService = require('../services/index');
const utils = require('../utils/index');

const personValidator = {
	validateCreatePerson(){
		return [
			body('surname').not().isEmpty({ignore_whitespace:true}),
			body('birthDate').not().isEmpty({ignore_whitespace:true}),
			body('gender').not().isEmpty({ignore_whitespace:true}),
			body('salary').not().isEmpty({ignore_whitespace:true}).isNumeric(),
			body('tcNumber').not().isEmpty({ignore_whitespace:true}).custom(async (value, {req}) => {
				if(utils.helpers.validateTcNumber(value) === false){
					throw new Error('wrong tc number')
				}
				return true;
			}),
			body('email').not().isEmpty({ignore_whitespace:true}).isEmail().custom(async (value, {req}) => {
				const result = await personService.person.findByEmail(value);
				if(result){
					throw new Error('email is already in db')
				}
				return true;
			}),
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
			body('surname').not().isEmpty({ignore_whitespace:true}),
			body('birthDate').not().isEmpty({ignore_whitespace:true}),
			body('gender').not().isEmpty({ignore_whitespace:true}),
			body('salary').not().isEmpty({ignore_whitespace:true}).isNumeric(),
			body('tcNumber').not().isEmpty({ignore_whitespace:true}),
			body('email').not().isEmpty({ignore_whitespace:true}).isEmail().custom(async (value, {req}) => {
				const result = await personService.person.findByEmail(value);
				if(result){
					throw new Error('email is already in db')
				}
				return true;
			}),
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
	validateUploadAvatar(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
	validateUploadCv(){
        return [
            query('id').isMongoId().withMessage('wrong id')
        ]
    },
	validateGetCompany(){
        return [
            param('id').isMongoId().withMessage('wrong id')
        ]
    },
}

module.exports = personValidator;