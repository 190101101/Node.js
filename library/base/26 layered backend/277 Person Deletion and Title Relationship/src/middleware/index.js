const authMiddleware = require('./auth.middleware');
const loggerMiddleware = require('./logger.middleware');
const singleImageUploadMiddleware = require('./singleimageupload.middleware');
const singlecvUploadMiddleware = require('./singlecvUpload.middleware');

module.exports = {
	authMiddleware,
	loggerMiddleware,
	singleImageUploadMiddleware,
	singlecvUploadMiddleware,
}