const crypto = require('crypto');

const secretKey = 'a654ds6a54d65as4das56d';
let hash;
hash = crypto.createHash('sha512', secretKey).update('cookiethecat').digest('hex');
console.log(hash);

hash = crypto.createHash('sha512', secretKey).update('cookiethecat').digest('base64');
console.log(hash);

hash = crypto.createHash('sha512', secretKey).update('cookiethecat').digest('base64url');
console.log(hash);

hash = crypto.createHash('sha512', secretKey).update('cookiethecat').digest('binary');
console.log(hash);