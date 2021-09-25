const { check, body } = require("express-validator");

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
];
