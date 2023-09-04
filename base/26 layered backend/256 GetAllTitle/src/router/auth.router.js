const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.post('/auth./signIn', controller.authController.signIn);
router.post('/auth./signUp', controller.authController.signUp);

module.exports = {
	auth:router
}