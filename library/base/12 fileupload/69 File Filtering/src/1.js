const express = require('express');
const app = express();

const router = express.Router();
const singleFileUpload = require('./singleFileUpload');

app.use(express.json());

router.post('/upload', (req, res) => {
    singleFileUpload(req, res, (err) => {
      if(err){
        res.json(err);
      }
        console.log(req.file);
    });
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

