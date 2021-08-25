const { check, body } = require("express-validator");
const { leer } = require("../data/users_db");
const usuarios = leer();

module.exports = [
  check("nombre")
    .notEmpty()
    .withMessage("Debe ingresar su nombre")
    .bail()
    .isLength({
      min: 3,
      max: 30,
    })
    .withMessage("El nombre debe tener un mínimo de 3 caracteres"),
    check("pais")
    .isLength({max:25})
    .withMessage("El maximo de caracteres permitido es de 25"),
    check("direccion")
    .isLength({max:25})
    .withMessage("El maximo de caracteres permitido es de 25")
];
