module.exports = (req, res, next) => {
    if(req.query.level == 1){
        next();
    }else{
        res.send('only level 1');
    }
}