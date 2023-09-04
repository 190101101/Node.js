const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const personValidator = require('../validations/index');

router.get('/all', controller.personController.getAllPerons);

router.get('/list', 
[personValidator.personValidator.validateListPagination()], 
controller.personController.listPagination);

router.get('/person/:id', controller.personController.getPersonById);

router.post('/create', 
[personValidator.personValidator.validateCreatePerson()], 
controller.personController.createPerson);

router.post('/uploadAvatar',
[personValidator.personValidator.validateUploadAvatar()], 
controller.personController.uploadAvatar);

router.post('/uploadCv',
// [personValidator.personValidator.validateUploadCv()], 
controller.personController.uploadCv);


router.post('/updateAvatar', controller.personController.updateAvatar);
router.post('/updateCv', controller.personController.updateCv);


router.put('/update/:id', controller.personController.updatePerson);
router.delete('/delete/:id', controller.personController.deletePersonById);

router.get('/company/:id', controller.personController.getCompany);
router.get('/title/:id', controller.personController.getTitle);

module.exports = {
	person:router
}