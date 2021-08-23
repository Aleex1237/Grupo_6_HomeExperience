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
    //Dentro de la variable errors guardamos las validaciones y le pasamos como parametro todo lo que venga por req

    //Si errors está vacio se ejecutará lo que hay dentro de las llaves
    if (errors.isEmpty()) {
      //creamos una variable usuario y dentro guardaremos aquel usuario cuyo email sea el mismo que viene por el body
      let usuario = users.find((usuario) => usuario.email === req.body.email);

      //Dentro de session creamos el elemento user el cual almacenará del usuario que matcheo con email sus keys id, name y admin
      req.session.user = {
        id: usuario.id,
        name: usuario.name,
        admin: usuario.admin,
      };
      //Si por el body viene tildada la checkbox entonces crearemos la cookie "user" la cual almacenará todo lo que hay en session.user y le agregaremos la key maxAge y la value number el cual será el tiempo que "vivirá" la cookie dentro del navegador.
      if (req.body.check) {
        res.cookie("user", req.session.user, { maxAge: 86400000 });
      }
      res.redirect("/");
    } else {
      //Si no se cumple lo anterior, renderizamos de nuevo login, en la variable errors, guardamo errors mapeado, en old guardamos todo lo que vino por el body.
      res.render("login", {
        errors: errors.mapped(),
        old: req.body,
        title: "Iniciar sesión",
      });
    }
  },
  
  logOut: (req, res) => {
    //ejecutamos destroy() sobre el session lo cual hará que nos deslogueemos.
    req.session.destroy();
    return res.redirect("/");
  },

  register: (req, res) => {
    return res.render("register", {
      title: "Registrate",
    });
  },
  addUser: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      //Si errores está vacio creamos la variable usuario, la cual guardará un objeto literal con diferentes keys/values
      let usuario = {
        id: users[users.length - 1].id + 1,
        name: req.body.nombre,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
        fecha_nac: req.body.fecha_nac,
        admin: false,
      };

      users.push(usuario);
      guardar(users);

      return res.render("index", {
        title: "Home Experience",
      });
    } else {
      res.render("register", {
        errors: errors.mapped(),
        old: req.body,
        title: "Registrate",
      });
    }
  },
  profile: (req, res) => {
    return res.render("profile", {
      title: "Perfil",
    });
  },
};
