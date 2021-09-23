const { check, body } = require("express-validator");
const { leer } = require("../data/users_db");
const usuarios = leer();
const db = require("../database/models");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Debe ingresar su nombre")
    .bail()
    .isLength({
      min: 3,
      max: 30,
    })
    .withMessage("El nombre debe tener un mínimo de 3 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("Debe ingresar su mail")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido")
    .bail()
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
      .then((user) => {
        if (user) {
          return Promise.reject(
            "El email ingresado ya está en uso. Iniciá sesión!"
          );
        }
      });
    }),

  body("fecha_nac")
    .notEmpty()
    .withMessage("Debe ingresar su fecha de nacimiento")
    .bail()
    .custom((value, { req }) => {
      let hoy = new Date();
      let cumpleanos = new Date(value);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      let m = hoy.getMonth() - cumpleanos.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
      }
      if (edad >= 18) {
        return true;
      }
      return false;
    })
    .withMessage("Debe ser mayor de 18 años"),

  body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isLength({ min: 8, max: 12 })
    .withMessage("La contraseña debe tener entre 8 y 12 caracteres")
    .bail()
    .custom((value, { req }) => {
      //Si las contraseñas coinciden retorna true, de lo contrario retorna false
      if (value === req.body.password2) {
        return true;
      }
      return false;
    })
    .withMessage("Las contraseñas deben coincidir"),

  body("password2")
    .notEmpty()
    .withMessage("Debe reingresar su contraseña")
    .bail()
    .isLength({ min: 8, max: 12 })
    .withMessage("La contraseña debe tener entre 8 y 12 caracteres")
    .bail()
    .custom((value, { req }) => {
      //Si las contraseñas coinciden retorna true, de lo contrario retorna false
      if (value === req.body.password) {
        return true;
      }
      return false;
    })
    .withMessage("Las contraseñas deben coincidir"),

  body("acepto")
    .custom((value, { req }) => {
      if (req.body.acepto) {
        return true;
      }
      return false;
    })
    .withMessage("Debe aceptar los términos y condiciones"),
];
