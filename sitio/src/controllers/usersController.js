const { leer, guardar } = require("../data/users_db");
let users = leer();
const { validationResult } = require("express-validator");
let bcrypt = require("bcryptjs");

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
  addUser: (req,res)=>{
    let errors = validationResult(req);
    if(errors.isEmpty()){
      let usuario = {
        id: users[users.length-1].id+1,
        name: req.body.nombre,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
        fecha_nac: req.body.fecha_nac,
        admin: false
      };
      users.push(usuario);
      guardar(users);

      return res.render("index", {
        title: "Home Experience"
      });
    }else{
        res.render("register", {
        errors: errors.mapped(),
        old: req.body,
        title: "Registrate",
      });
    }
    
  }
};
