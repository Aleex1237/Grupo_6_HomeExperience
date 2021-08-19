var express = require("express");
var router = express.Router();

//requriendo controladores
const { login, register, admin, logUser, addUser, profile } = require("../controllers/usersController");

//requiriendo middlewares
const loginValidator = require("../validations/loginValidator");
const registerValidator = require("../validations/registerValidator");

/* GET users listing. */
router.get("/iniciar-sesion" , login);
router.post("/iniciar-sesion", loginValidator, logUser)

router.get("/registro", register);
router.post("/registro", registerValidator, addUser);

router.get('/perfil', profile)

module.exports = router;
