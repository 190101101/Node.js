const utils = require('../utils/index')
const upload = require('../middleware/singlefileupload.middleware')
const multer = require('multer')

exports.uploadFile = (req, res) => {
    return new Promise((resolve, reject) => {
        upload(req, res, async(err) => {
            if (err instanceof multer.MulterError) {
                reject(err)
            } else if (err) {
                reject(err)
            }
            
            const ip = await utils.helpers.getHost()
            const filePath = process.env.FILE_PATH
            const fileName = req.file.filename
            const fileString = `${ip}${filePath}${fileName}`
            resolve(fileString)

        })
    })
}
