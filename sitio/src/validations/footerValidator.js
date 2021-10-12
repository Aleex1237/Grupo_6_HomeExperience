const { check } = require("express-validator");

module.exports=[
    check("letter")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio.")
    .bail()
    .isEmail()
    .withMessage("Este campo solo acepta emails!.")
]
