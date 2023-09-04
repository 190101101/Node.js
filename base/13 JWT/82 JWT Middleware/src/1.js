const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();
const jwtMiddleware = require('./jwtMiddleware');

app.use(express.json());

router.post('/login', (req, res, next) => {
    const {name, password} = req.body;

    const token = jwt.sign({
        id: Date.now(),
        name,
        password,
    }, 'meow*', {expiresIn:'1h'});

    res.json({name, token});

});

router.get('/users', jwtMiddleware, (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.use(router);

app.listen(3000, () => {
    console.log('http://localhost:3000');
});

/*

{
    "name":"cookie",
    "password": "cookiethecat"
}

*/