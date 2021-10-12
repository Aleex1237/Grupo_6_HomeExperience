var express = require('express');
var router = express.Router();

const {index, contact, experience, about, contactPost, footerPost}= require('../controllers/indexController')

const contactValidator=require("../validations/contactValidator");
const footerValidator=require("../validations/footerValidator");
/* GET home page. */
router.get('/', index);

router.get('/contacto', contact);
router.post("/contacto",contactValidator  ,contactPost);

router.post("/contactoF",footerValidator, footerPost);


router.get('/experiencia', experience);
router.get('/nosotros', about);


module.exports = router;
