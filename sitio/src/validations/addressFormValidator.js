const { check, body } = require("express-validator");

module.exports = [
  check("pais").notEmpty().withMessage("Seleccionar Pais"),
  check("provincia")
    .notEmpty()
    .withMessage("Debe indicar una provincia")
    .bail()
    .isLength({ max: 100 })
    .withMessage("El maximo de caracteres permitidos es de 100")
    .bail(),
  check("localidad")
    .notEmpty()
    .withMessage("Debe indicar una localidad")
    .bail()
    .isLength({ max: 100 })
    .withMessage("El maximo de caracteres permitidos es de 100")
    .bail(),
  check("postal")
    .notEmpty()
    .withMessage("Debe indicar un codigo postal")
    .bail()
    .isLength({ min: 4, max: 8 })
    .withMessage("El maximo de caracteres permitidos es de 8")
    .bail()
    .isNumeric()
    .withMessage("Solo se permiten Numeros.")
    .bail(),
  check("calle")
    .notEmpty()
    .withMessage("Debe indicar una calle")
    .bail()
    .isLength({ max: 100 })
    .withMessage("El maximo de caracteres permitidos es de 100")
    .bail()
    .isAlpha()
    .withMessage("Solo se permiten letras.")
    .bail(),
  check("numero")
    .notEmpty()
    .withMessage("Debe indicar un numero de calle")
    .bail()
    .isLength({ max: 100 })
    .withMessage("El maximo de caracteres permitidos es de 100")
    .bail()
    .isNumeric()
    .withMessage("Solo se permiten Numeros.")
    .bail(),
  check("departamento")
    .isLength({ min: 0, max: 100 })
    .withMessage("El maximo de caracteres permitidos es de 100")
    .bail(),
];
