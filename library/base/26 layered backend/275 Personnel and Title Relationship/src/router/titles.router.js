const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const titleValidator = require('../validations/index');

router.get('/all', controller.titlesController.getAllTitles);
router.get('/title/:id', [titleValidator.titleValidator.validateFindById()], controller.titlesController.getTitleById);
router.post('/create', 
// [titleValidator.titleValidator.validateCreateTitle()], 
controller.titlesController.createTitle);
router.put('/update/:id', [titleValidator.titleValidator.validateUpdateTitleById()], controller.titlesController.updateTitle);
router.delete('/delete/:id', [titleValidator.titleValidator.validateDeleteById()], controller.titlesController.deleteTitleById);

module.exports = {
	titles:router
}
