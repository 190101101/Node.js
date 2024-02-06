const fs = require('fs');
const path = require('path');

// Kütüphane dizini
const libraryDirectory = 'app';

// Dizinleri tarayarak person.json dosyalarını silen fonksiyon
function deletePersonJSONRecursively(directory) {
  fs.readdirSync(directory).forEach((item) => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      deletePersonJSONRecursively(itemPath);
    } else if (item === 'person.json') {
      console.log(`Deleting ${itemPath}`);
      fs.unlinkSync(itemPath);
      console.log(`Deleted ${itemPath}`);
    }
  });
}

// Kütüphane dizinini tarayarak işlemi başlat
deletePersonJSONRecursively(libraryDirectory);
