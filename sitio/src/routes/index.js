var express = require('express');
var router = express.Router();

const {index, contact, experience, about, contactPost}= require('../controllers/indexController')

const contactValidator=require("../validations/contactValidator")

/* GET home page. */
router.get('/', index);

router.get('/contacto', contact);
router.post("/contacto", contactValidator ,contactPost)

router.get('/experiencia', experience);
router.get('/nosotros', about);


module.exports = router;
