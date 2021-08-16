var express = require("express");
var router = express.Router();

//requriendo controladores
const { login, register, admin, logUser } = require("../controllers/usersController");

//requiriendo middlewares
const loginValidator = require("../validations/loginValidator");

/* GET users listing. */
router.get("/iniciar-sesion" , login);
router.post("/iniciar-sesion", loginValidator, logUser)

router.get("/registro", register);

module.exports = router;
