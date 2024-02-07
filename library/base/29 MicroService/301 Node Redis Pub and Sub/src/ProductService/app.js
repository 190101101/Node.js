const {connectMongoDB } = require('./db/db');
const express = require('express');
const app = express();
const router = express.Router();
const Product = require('./db/product');

router.get('/', (req, res) => {
    const product = new Product({name: 'soap 2'});

    product.save().then((r) => {
        res.send(r);
    }).catch((err) => {
        res.send(err);
    });

    res.send(product);
});

app.use(express.json());
app.use(router);

connectMongoDB().then(() => {
    app.listen(3300, () => {
        console.log('http://localhost:3300');
    });
});


