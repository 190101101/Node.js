const jwt = require('jsonwebtoken');
const token = jwt.sign({
    id: 1,
    name: 'cookies',
    password: 'cookiethecat',
    job: 'meow'
}, 'meowmeowmeow*', {expiresIn: '5m'});

console.log(token);