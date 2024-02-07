const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, callback){
        callback(null, 'C:/Users/190101101/Desktop/Node.js/node/lesson/src/uploads');
    },
    filename(req, file, callback){
        callback(null, Date.now()+'_'+file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    callback(null, true);
};

const upload = multer({
    storage: storage, 
    fileFilter:fileFilter
}).single('file');;

module.exports = upload;