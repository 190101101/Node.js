const {connectMongoDB } = require('./db/db');
const express = require('express');
const app = express();
const router = express.Router();
const User = require('./db/user');

router.get('/', (req, res) => {
    const randomNum = Math.random();
    const user = new User({name: `${randomNum} soap`});

    user.save().then((r) => {
        res.send(r);
    }).catch((err) => {
        res.send(err);
    });
});

app.use(express.json());
app.use(router);

connectMongoDB().then(() => {
    app.listen(3300, () => {
        console.log('Product Service http://localhost:3300');
    });
});


