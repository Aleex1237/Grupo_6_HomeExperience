const { leer } = require("../data/products_db");
let products = leer();
const { validationResult } = require("express-validator");

module.exports = {
  login: (req, res) => {
    return res.render("login", {
      title: "Iniciar sesión",
    });
  },
  logUser: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      res.redirect("/");
    } else {
      res.render("login", {
        errors: errors.mapped(),
        old: req.body,
        title: "Iniciar sesión",
      });
    }
  },

  register: (req, res) => {
    return res.render("register", {
      title: "Registrate",
    });
  },
};
