const controller = require('../controllers/index');
const express = require('express');
const router = express.Router();

router.post('/signIn', controller.authController.signIn);
router.post('/signUp', controller.authController.signUp);

module.exports = {
	auth:router
}