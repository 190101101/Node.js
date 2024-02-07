const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('index');
});

router.get('/test', (req, res, next) => {
    res.send('test');
});

app.use((req, res, next) => {
    console.log('middleware 1 workd');
    next();
});

app.use((req, res, next) => {
    console.log('middleware 2 workd');
    next();
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});