const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const anyFileUpload = require('./anyFileUpload');

app.use(express.json());

if(!fs.existsSync('./example/src/uploads')){
  fs.mkdirSync('./example/src/uploads');
}

router.post('/anyFileUpload', (req, res) => {
  anyFileUpload(req, res, (err) => {
    if(err){
      res.json(err);
    }
    else{
      res.json('ok');
    }
    console.log(req.files);
  });
  console.log(req.body, req.files);
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
