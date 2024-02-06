const fs = require('fs');
const path = require('path');

// Kütüphane dizini
const libraryDirectory = 'deleting';

// Dizinleri tarayarak node_modules klasörlerini silen fonksiyon
function deleteNodeModulesRecursively(directory) {
  fs.readdirSync(directory).forEach((item) => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      if (item === 'node_modules') {
        console.log(`Deleting ${itemPath}`);
        deleteNodeModules(itemPath);
      } else {
        deleteNodeModulesRecursively(itemPath);
      }
    }
  });
}

// node_modules klasörünü silen fonksiyon
function deleteNodeModules(nodeModulesPath) {
  fs.rmdirSync(nodeModulesPath, { recursive: true });
  console.log(`Deleted ${nodeModulesPath}`);
}

// Kütüphane dizinini tarayarak işlemi başlat
deleteNodeModulesRecursively(libraryDirectory);
