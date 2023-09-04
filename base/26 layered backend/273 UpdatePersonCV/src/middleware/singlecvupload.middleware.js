const multer = require('multer');
const mimeTypes = require('../consts/index');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'C:/Users/190101101/Desktop/Node.js/node/example/src/uploads')
    },
    filename: function(req, file, cb){
        const randomName = `${Date.now()}_${Math.random().toString(36)}_${file.fieldname}_${file.originalname}`
        cb(null, randomName);
    }
});

const fileFilter = (req, file, cb) => {
    if(mimeTypes.general.CV_MIME_TYPES.includes(file.mimetype)){
        cb(null, true);
        return
    }

    return cb(new Error('unsupported file format'), false);
}

const upload = multer({
    storage, 
    // fileFilter, 
    limits:{fileSize: '1mb'}
}).single('cv');

module.exports = upload;