const express = require('express');
const multer = require('multer');

const app = express();
const port = 3000;

// Dosyaların yükleneceği dizini ve dosya adını ayarlayalım
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'example/src/uploads/'); // Dosyaların yükleneceği dizini belirtin (uploads/ klasörüne yüklenecek)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Dosya adını belirleyin (unique bir isim)
  }
});

const upload = multer({ storage: storage });

app.get('/upload', (req, res) => {
  res.send('Dosya başarıyla yüklendi: ');
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send('Dosya yükleme hatası');
  }

  res.send('Dosya başarıyla yüklendi: ' + req.file.filename);
});

app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta çalışıyor.`);
});
