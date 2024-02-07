const multer = require('multer');
const express = require('express');
const singleFileUpload = require('./singleFileUpload');

const app = express();
const router = express.Router();

app.use(express.json());

router.post('/upload', singleFileUpload, (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

