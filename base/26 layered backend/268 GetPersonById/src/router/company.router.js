const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const companyValidator = require('../validations/index');

router.get('/all', controller.companyController.getAllCompany);

router.get('/read/:id', 
[companyValidator.companyValidator.validateFindById()],
controller.companyController.getCompanyById);

router.post('/create', 
[companyValidator.companyValidator.validateCreateCompany()], 
controller.companyController.createCompany);

router.post('/uploadLogo', 	
[companyValidator.companyValidator.validateUploadLogo()],
controller.companyController.uploadLogo);

router.post('/updateLogo', 	
[companyValidator.companyValidator.validateUpdateLogo()],
controller.companyController.updateLogo);

router.put('/update/:id',
[companyValidator.companyValidator.validateUpdateCompanyById()], 
controller.companyController.updateCompany);

router.delete('/delete/:id', 
[companyValidator.companyValidator.validateDeleteById()],
controller.companyController.deleteCompanyById);

module.exports = {
	company:router
}