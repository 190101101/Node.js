const router = require('express').Router();
const indexController = require('../controller/indexController');
const userController = require('../controller/userController');

// index
router.get('/', indexController.Index);
router.get('/:brand/auto/:city', indexController.GetParameters);
router.post('/', indexController.Post);
router.delete('/', indexController.Delete);
router.put('/', indexController.Put);

// user
router.get('/users', userController.User);

// last
router.use(indexController.NotFound);
module.exports = router;
