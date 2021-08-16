const { check, body } = require("express-validator");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Debe ingresar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email valido"),

  check("textArea")
    .isLength({
      max: 200,
    })
    .withMessage("El numero maximo de caracteres es de 200"),
];
