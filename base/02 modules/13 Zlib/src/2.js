const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const inp = fs.createReadStream('file.txt');
const out = fs.createWriteStream('file.txt.gz');

inp.pipe(gzip).pipe(out);
