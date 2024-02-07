const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();
const titleValidator = require('../validations/index');

router.get('/all', controller.titlesController.getAllTitles);
router.get('/title/:id', controller.titlesController.getTitleById);
router.post('/create', controller.titlesController.createTitle);
// router.put('/update/:id', controller.titlesController.updateTitle);
// router.delete('/delete:/id', controller.titlesController.deleteTitle);

module.exports = {
	titles:router
}