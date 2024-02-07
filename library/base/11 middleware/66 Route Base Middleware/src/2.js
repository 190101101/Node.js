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
    if(!req.url.includes('test')){
        if(req.query.name == 'apsi'){
            console.log('middleware 1 workd');
            next();
        }else{
            console.log('oops name');
        }
    }else{
        next();
    }
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});