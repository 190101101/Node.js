module.exports = (req, res, next) => {
    if(req.query.test == 1){
        next();
    }else{
        res.send('only test 1');
    }
}