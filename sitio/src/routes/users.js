var express = require('express');
var router = express.Router();

const {login,register}= require('../controllers/usersController')

/* GET users listing. */
router.get('/iniciar-sesion',login);
router.get('/registro',register);


module.exports = router;
