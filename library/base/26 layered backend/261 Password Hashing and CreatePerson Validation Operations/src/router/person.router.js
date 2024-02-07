const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const personValidator = require('../validations/index');

router.get('/person', controller.personController.getAllPerons);
router.get('/getById/:id', controller.personController.getPersonById);

router.post('/create', 
[personValidator.personValidator.validateCreatePerson()], 
controller.personController.createPerson);

router.put('/update:/:id', controller.personController.updatePerson);
router.delete('/delete:/id', controller.personController.deletePersonById);

module.exports = {
	person:router
}