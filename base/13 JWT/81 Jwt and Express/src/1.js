const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());

router.post('/login', (req, res, next) => {
    const {name, password} = req.body;

    const token = jwt.sign({
        id: Date.now(),
        name,
        password,
    }, 'meow*', {expiresIn:'20s'});

    res.json({name, token});

});

router.get('/users', (req, res) => {
    const {authorization} = req.headers;

    jwt.verify(authorization, 'meow*', (err, decode) => {
        if(err){
            console.log('name:', err.name);
            console.log('message:', err.message);
            res.send('nope');
        }

        console.log('decode:', decode);
        res.send('hello');
    });
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