const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const companyValidator = require('../validations/index');

router.get('/all', controller.companyController.getAllCompany);
router.get('/getById/:id', controller.companyController.getCompanyById);
router.post('/create', 
[companyValidator.companyValidator.validateCreateCompany()], 
controller.companyController.createCompany);

router.post('/uploadLogo', 	
[companyValidator.companyValidator.validateUploadLogo()],
controller.companyController.uploadLogo);

router.put('/update:/:id', controller.companyController.updateCompany);
router.delete('/delete', 
[companyValidator.companyValidator.validateDeleteById()],
controller.companyController.deleteCompanyById);

module.exports = {
	company:router
}