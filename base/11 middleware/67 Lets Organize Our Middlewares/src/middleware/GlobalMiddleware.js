module.exports = (req, res, next) => {
    if(req.query.payment == 1){
        next();
    }else{
        res.send('only payment 1');
    }
}