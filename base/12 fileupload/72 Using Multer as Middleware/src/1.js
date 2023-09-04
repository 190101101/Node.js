const express = require('express');
const app = express();
const fs = require('fs');

const router = express.Router();
const singleFileUpload = require('./singleFileUpload');

app.use(express.json());

if(!fs.existsSync('./example/src/uploads')){
  fs.mkdirSync('./example/src/uploads');
}

router.post('/upload', singleFileUpload.single('file'), (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

