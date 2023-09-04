const url = require('url');

// const myUrl = new URL('https://localhost:3434/abc/?name=cookie&surname=cookies');
const myUrl = new URL('https://localhost:3434/abc/?searchQ=cookie');

// console.log(myUrl);


console.log(myUrl.searchParams.get('searchQ'));
console.log(myUrl.searchParams.has('searchQ'));