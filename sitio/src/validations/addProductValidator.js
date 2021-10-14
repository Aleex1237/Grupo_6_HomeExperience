const { check, body } = require("express-validator");

module.exports = [
  check("nombre")
    .notEmpty()
    .withMessage("Debe ingresar un nombre")
    .bail()
    .isLength({
      /* bail sirve para cortar la cadena de validación si hay un error. isLenght para definir la cantidad de caracteres mínimos y máximos */
      min: 3,
      max: 30,
    })
    .withMessage(
      "El nombre debe tener un mínimo de 3 caracteres"
    ) /* .bail().isAlpha().withMessage('El nombre sólo puede contener letras'), */,

  check("descripcion")
    .notEmpty()
    .withMessage("Debe ingresar descripción del producto")
    .bail()
    .isLength({
      min: 50,
      max: 300,
    })
    .withMessage(
      "La descripción debe tener un mínimo de 50 caracteres y un máximo de 300"
    ),

  check("precio")
    .notEmpty()
    .withMessage("Requerido")
    .bail()
    .isInt()
    .withMessage(
      "Invalido"
    ) /* el isInt comprueba que sólo se puedan ingresar números enteros */,

  check("categoria").notEmpty().withMessage("Seleccionar categoría"),

  check("keywords")
    .notEmpty()
    .withMessage("Debes ingresar una palabra clave")
    .bail()
    .isLength({
      min: 3,
      max: 30,
    })
    .withMessage("La palabra clave debe tener un mínimo de 3 caracteres"),

  check("product").custom((value, { req }) => {
    console.log(req.body.cantidadProductos);
    if (+req.body.cantidadProductos>=2) {
      return true;
    }else{
      return false;
    }
  })
  .withMessage("Debe ingresar al menos dos productos para esta experiencia"),
];
