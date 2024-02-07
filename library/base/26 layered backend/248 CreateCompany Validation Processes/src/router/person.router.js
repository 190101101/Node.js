const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.get('/person', controller.personController.getAllPerons);
router.get('/getById/:titleId', controller.personController.getPersonById);
router.post('/create', controller.personController.createPerson);
router.put('/update:/:titleId', controller.personController.updatePerson);
router.delete('/delete:/titleId', controller.personController.deletePersonById);

module.exports = {
	person:router
}