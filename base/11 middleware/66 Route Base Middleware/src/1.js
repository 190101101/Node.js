const express = require('express');
const app = express();

const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.level == 1){
        next();
    }else{
        res.send('only level 1');
    }
}, (req, res) => {
    res.send('index page');
});

app.use(router);

app.listen(3000, () => {
	console.log('http://localhost:3000');
});