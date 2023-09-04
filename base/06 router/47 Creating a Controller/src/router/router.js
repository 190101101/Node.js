const router = require('express').Router();
const controller = require('../controller/indexController');

router.get('/', controller.Index);
router.get('/:brand/auto/:city', controller.GetParameters);
router.post('/', controller.Post);
router.delete('/', controller.Delete);
router.put('/', controller.Put);
router.use(controller.NotFound);

module.exports = router;
