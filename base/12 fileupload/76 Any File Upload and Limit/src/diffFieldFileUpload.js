const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'example/src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+'_'+Date.now()+'_'+file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype.includes('image')){
        cb(null, true);
    } else{
        cb(new multer.MulterError(300, file.originalname), false);
        // cb({message: 'file type is wrong'}, false);
    }
    console.log('file filter: ', file);
};

const upload = multer({
    storage: storage, 
    fileFilter:fileFilter,
    limits: {
        filesize: 1024 * 1024 * 2
    }
}).fields([
    { name: 'profile_pic', maxCount: 1},
    { name: 'cover_picture', maxCount: 2}
]);

module.exports = upload;