const url = require('url');

const myUrl = new URL('https://www.google.com/search?q=cat');

console.log('href:', myUrl.href);
console.log('pathname:', myUrl.pathname);
console.log('hash:', myUrl.hash);
console.log('hostname:', myUrl.hostname);
console.log('port:', myUrl.port);
console.log('protocol:', myUrl.protocol);
console.log('origin:', myUrl.origin);
