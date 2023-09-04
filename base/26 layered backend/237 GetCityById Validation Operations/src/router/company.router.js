const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.get('/company', controller.companyController.getAllCompany);
router.get('/getById/:titleId', controller.companyController.getCompanyById);
router.post('/create', controller.companyController.createCompany);
router.put('/update:/:titleId', controller.companyController.updateCompany);
router.delete('/delete:/titleId', controller.companyController.deleteCompanyById);

module.exports = {
	company:router
}