module.exports = (req, res, next) => {
    if(req.query.status == 1){
        next();
    }else{
        res.send('only status 1');
    }
}