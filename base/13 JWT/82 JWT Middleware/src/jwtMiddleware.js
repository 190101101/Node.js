const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    if(!req.headers){
        res.status(401).send('nope');
    }

    const {authorization} = req.headers;

    jwt.verify(authorization, 'meow*', (err, decode) => {
        if(err){
            res.status(401).json({
                name: err.name, 
                message: err.message
            });
        }
        req.user = decode;
        next();
    });
};