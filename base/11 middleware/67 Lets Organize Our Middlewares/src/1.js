const express = require('express');
const app = express();

const router = express.Router();

const homeMiddleware = require('./middleware/HomeMiddleware');
const homeMiddleware2 = require('./middleware/HomeMiddleware2');
const testMiddleware = require('./middleware/TestMiddleware');
const globalMiddleware = require('./middleware/GlobalMiddleware');

// http://localhost:3000/?level=1&status=1
router.get('/', [homeMiddleware, homeMiddleware2], (req, res) => {
    res.send('index page');
});

// http://localhost:3000/test?test=1
router.get('/test', [testMiddleware], (req, res) => {
    res.send('test page');
});

// http://localhost:3000/?level=1&status=1&payment=1
// http://localhost:3000/test?test=1&payment=1

app.use(globalMiddleware);
app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});