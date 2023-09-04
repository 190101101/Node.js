const router = require('express').Router();

const public = 'C:/Users/190101101/Desktop/Node.js/node/example/src/public/';

router.get('/', (req, res) => {
	res.sendFile(public + 'index.html');
});

module.exports = router;
