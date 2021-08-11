const { leer } = require("../data/products_db");
let products = leer();

module.exports = {
  login: (req, res) => {
    return res.render("login", {
      title: "Iniciar sesión",
    });
  },

  register: (req, res) => {
    return res.render("register", {
      title: "Registrate",
    });
  },
};
