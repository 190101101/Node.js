const fs = require('fs');
const path = require('path');

// Kütüphane dizini
const libraryDirectory = 'library';

// Silmek istediğiniz dosya uzantıları
const fileExtensionsToDelete = ['.jpeg', '.jpg', '.png', '.pdf'];

// Dizinleri tarayarak belirtilen uzantılara sahip dosyaları silen fonksiyon
function deleteFilesWithExtensionsRecursively(directory) {
  fs.readdirSync(directory).forEach((item) => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      deleteFilesWithExtensionsRecursively(itemPath);
    } else {
      if (fileExtensionsToDelete.includes(path.extname(item).toLowerCase())) {
        console.log(`Deleting ${itemPath}`);
        fs.unlinkSync(itemPath);
        console.log(`Deleted ${itemPath}`);
      }
    }
  });
}

// Kütüphane dizinini tarayarak işlemi başlat
deleteFilesWithExtensionsRecursively(libraryDirectory);
