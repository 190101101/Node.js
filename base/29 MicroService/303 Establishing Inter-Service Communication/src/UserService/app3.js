
const {connectMongoDB } = require('./db/db');
const express = require('express');
const app = express();
const router = express.Router();
const NRP = require('node-redis-pubsub');
const Users = require('./db/users');

const nrp = new NRP({port: 6379, scope: 'users'});

router.get('/', (req, res) => {
    const randomNum = Math.random();
    const users = new Users({name: `from user service ${randomNum}`});

    users.save().then((r) => {
        res.send(r);
        nrp.emit('created', r);
    }).catch((err) => {
        res.send(err);
    });
});

app.use(express.json());
app.use(router);

connectMongoDB().then(() => {
    app.listen(3301, () => {
        console.log('Product Service http://localhost:3301');
    });
});


