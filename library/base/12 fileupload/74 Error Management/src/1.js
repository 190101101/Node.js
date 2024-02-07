const express = require('express');
const app = express();
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const singleFileUpload = require('./singleFileUpload');

app.use(express.json());

if(!fs.existsSync('./example/src/uploads')){
  fs.mkdirSync('./example/src/uploads');
}

const uploadHandler = singleFileUpload.array('files', 3);

router.post('/upload', (req, res) => {
    uploadHandler(req, res, (err) => {
      if(err instanceof multer.MulterError){
        res.json(err);
      }else{
        console.log('error: ', err);
      }
      if(err){
        res.send('error');
      }else{
        res.send('ok');
      }
    });
});

app.use(router);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});

