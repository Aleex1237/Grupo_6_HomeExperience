var express = require("express");
var router = express.Router();

//requriendo controladores
const {
  login,
  register,
  updateProfile,
  deleteUser,
  address,
  updateAddress,
  logUser,
  addUser,
  profile,
  logOut,
} = require("../controllers/usersController");

//requiriendo middlewares
const loginValidator = require("../validations/loginValidator");
const registerValidator = require("../validations/registerValidator");
const userLogedCheck = require("../middlewares/userLogedCheck");
const noUserLoged = require("../middlewares/noUserLoged");
const update = require("../middlewares/userMulter");
const updateProfileValidator = require("../validations/updateProfileValidator");
const editPerfil = require("../middlewares/editPerfil");
const addressForm = require("../validations/addressFormValidator");

/* GET users listing. */
router.get("/iniciar-sesion", userLogedCheck, login);

router.post("/iniciar-sesion", loginValidator, logUser);

router.get("/registro", userLogedCheck, register);

router.post("/registro", registerValidator, addUser);

router.get("/cerrar-sesion", logOut);

router.get("/perfil/:id", noUserLoged, editPerfil, profile);
router.put(
  "/perfil/modificar/:id",
  update.single("imagenPerfil"),
  updateProfileValidator,
  updateProfile
);
router.put("/eliminar", deleteUser);

router.get("/direccion/:id", address);

router.put("/direccion/:id",addressForm, updateAddress);

module.exports = router;
