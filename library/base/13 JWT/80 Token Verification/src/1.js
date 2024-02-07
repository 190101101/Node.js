const jwt = require('jsonwebtoken');
const token = jwt.sign({
    id: 1,
    name: 'cookie',
    password: 'cookiethecat',
    job: 'meow'
}, 'meowmeowmeow*', {expiresIn: '1h'});

console.log(token);

jwt.verify(token, 'meowmeowmeow*', (err, decode) => {
    if(err){
        console.log('name:', err.name);
        console.log('message:', err.message);
    }else{
        console.log('decode:', decode);
    }
});