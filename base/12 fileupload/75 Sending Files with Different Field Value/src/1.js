const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const diffFieldFileUpload = require('./diffFieldFileUpload');

app.use(express.json());

if(!fs.existsSync('./example/src/uploads')){
  fs.mkdirSync('./example/src/uploads');
}

router.post('/diffFieldFileUpload', (req, res) => {
  diffFieldFileUpload(req, res, (err) => {
    if(err){
      res.json(err);
    }
    console.log(req.files);
  });
  console.log(req.body, req.files);
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
