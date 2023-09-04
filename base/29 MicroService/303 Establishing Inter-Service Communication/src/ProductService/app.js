const {connectMongoDB } = require('./db/db');
const express = require('express');
const app = express();
const router = express.Router();
const NRP = require('node-redis-pubsub');
const User = require('./db/user');

const nrp = new NRP({port: 6379, scope: 'user'});

router.get('/', (req, res) => {
    const randomNum = Math.random();
    const user = new User({name: `from product service ${randomNum}`});

    user.save().then((r) => {
        res.send(r);
    }).catch((err) => {
        res.send(err);
    });
});

nrp.on("created", (data) => {
    console.log('data:', data);
});

app.use(express.json());
app.use(router);

connectMongoDB().then(() => {
    app.listen(3300, () => {
        console.log('Product Service http://localhost:3300');
    });
});


