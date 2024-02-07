const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const personValidator = require('../validations/index');

router.get('/person', controller.personController.getAllPerons);
router.get('/getById/:id', controller.personController.getPersonById);

router.post('/create', 
[personValidator.personValidator.validateCreatePerson()], 
controller.personController.createPerson);

router.post('/uploadAvatar',
[personValidator.personValidator.validateUploadAvatar()], 
controller.personController.uploadAvatar);

router.post('/uploadCv',
// [personValidator.personValidator.validateUploadCv()], 
controller.personController.uploadCv);

router.put('/update:/:id', controller.personController.updatePerson);
router.delete('/delete:/id', controller.personController.deletePersonById);

module.exports = {
	person:router
}