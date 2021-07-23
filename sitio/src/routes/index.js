var express = require('express');
var router = express.Router();

const {index, contact, experience, about}= require('../controllers/indexController')

/* GET home page. */
router.get('/', index);
router.get('/contacto', contact);
router.get('/experiencia', experience);
router.get('/nosotros', about);


module.exports = router;
