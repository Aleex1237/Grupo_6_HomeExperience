const { check, body } = require("express-validator");
const { leer } = require("../data/users_db");
const usuarios = leer();

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio!")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage("El email es invalido. Ej:name@mail.com")
    .bail(),
  body("email")
    .custom((value, { req }) => {
      //sobre el array de usuarios ejecutamos el metodo find el cual buscará aquel usuario cuyo email sea exactamente el mismo que haya venido por el input.

      //y si el password del usuario es igual al que viene por el body y da true se cumple.
      let usuario = usuarios.find(
        (usuario) =>
          usuario.email === value && usuario.password === req.body.password
      );
      //Si usuario da true entonces preguntaremos si usuario existe y si no nos dio ningun error next
      if (usuario) {
        return true;
      }
      //Si hay algun error con usuario retornaria false con el siguiente msj y este se mandaria a la vista.
      return false;
    })
    .withMessage("Credenciales invalidas!."),
];
