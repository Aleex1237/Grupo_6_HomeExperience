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
  admin: (req, res) => {
    let id = req.params.id;

    return res.render("adminView", {
      title: "Administrador",
      products,
    });
  },
};
