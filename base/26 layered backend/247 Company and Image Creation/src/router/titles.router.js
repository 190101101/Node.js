const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.get('/titles', controller.titlesController.getAllTitles);
router.get('/getById/:titleId', controller.titlesController.getTitlesById);
router.post('/create', controller.titlesController.createTitle);
router.put('/update:/:titleId', controller.titlesController.updateTitle);
router.delete('/delete:/titleId', controller.titlesController.deleteTitle);

module.exports = {
	titles:router
}