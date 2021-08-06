const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/images/products");
    },
    filename: function(req, file, cb){
        cb(null, "_img_"+Date.now()+path.extname(file.originalname));
    }
});
const upload = multer({storage});
module.exports = upload;