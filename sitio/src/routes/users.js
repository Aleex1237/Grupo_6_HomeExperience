var express = require("express");
var router = express.Router();

//requriendo controladores
const { login, register, logUser, addUser, profile, logOut, updateProfile } = require("../controllers/usersController");

//requiriendo middlewares
const loginValidator = require("../validations/loginValidator");
const registerValidator = require("../validations/registerValidator");
const userLogedCheck=require("../middlewares/userLogedCheck");
const noUserLoged=require("../middlewares/noUserLoged");
const update=require("../middlewares/userMulter");
const updateProfileValidator=require("../validations/updateProfileValidator");

/* GET users listing. */
router.get("/iniciar-sesion" ,userLogedCheck, login);
router.post("/iniciar-sesion", loginValidator, logUser)

router.get("/registro",userLogedCheck, register);
router.post("/registro",registerValidator, addUser);

router.get("/cerrar-sesion", logOut)

router.get('/perfil/:id',noUserLoged ,profile)
router.put("/perfil/modificar/:id",update.single("imagenPerfil"),updateProfileValidator ,updateProfile)

module.exports = router;
