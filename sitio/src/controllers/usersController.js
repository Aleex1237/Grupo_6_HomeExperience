const db = require("../database/models");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const fetch = require("node-fetch");

module.exports = {
  //LISTADO DE USUARIOS
  list: (req, res) => {
    db.User.findAll({ include: [{ association: "rol" }] })
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //REGISTRO
  register: (req, res) => {
    return res.render("register", {
      title: "Registrate",
    });
  },
  //REGISTRO DE USUARIO
  addUser: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Address.create().then((address) => {
        db.User.create({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password),
          dateBirth: req.body.fecha_nac,
          avatar: "default.png",
          idRol: 3,
          idGenre: 1,
          idAddress: address.id,
        })
          .then(() => {
            res.redirect("/usuarios/iniciar-sesion");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    } else {
      res.render("register", {
        errors: errors.mapped(),
        old: req.body,
        title: "Registrate",
      });
    }
  },

  //LOGIN
  login: (req, res) => {
    return res.render("login", {
      title: "Iniciar sesión",
    });
  },
  //LOGEO DE USUARIO
  logUser: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.findOne({ where: { email: req.body.email } })
        .then((user) => {
          req.session.user = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            idRol: user.idRol,
          };

          if (req.body.check) {
            res.cookie("user", req.session.user, { maxAge: 86400000 });
          }

          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.render("login", {
        errors: errors.mapped(),
        old: req.body,
        title: "Iniciar sesión",
      });
    }
  },

  //DESLOGUEO DE USUARIO
  logOut: (req, res) => {
    //ejecutamos destroy() sobre el session lo cual hará que nos deslogueemos.
    req.session.destroy();

    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },

  //PERFIL
  profile: (req, res) => {
    let usuario = db.User.findByPk(req.params.id, {
      include: [{ association: "genre" }],
    });

    let genre = db.Genre.findAll();

    Promise.all([usuario, genre])
      .then(([usuario, genre]) => {
        return res.render("profile", {
          title: "Perfil: " + usuario.name,
          usuario,
          genre,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //ACTUALIZAR PERFIL
  updateProfile: (req, res) => {
    /* db.User.update(
      {
        name: req.body.nombre,
        dateBirth: req.body.fecha_nac,
        avatar: req.body.imagenPerfil,
        idGenre: req.body.genero,
      },
      { where: { id: res.locals.user.id } }
    )
      .then((user) => {

        req.session.user={
          name : req.body.nombre
        }

        res.locals.user = req.session.user;

        console.log(req.session.user);
        res.render("index", { user,title:"Home Experience" });

        
      })
      .catch((err) => {}); */

    db.User.findByPk(res.locals.user.id)
      .then((user) => {
        db.User.update(
          {
            name: req.body ? req.body.nombre : user.name,
            email: user.email,
            password: user.password,
            dateBirth: req.body ? req.body.fecha_nac : user.dateBirth,
            avatar: req.body ? req.body.imagenPerfil : user.avatar,
            idGenre: req.body ? req.body.genero : user.idGenre,
            idRol: user.idRol,
            idAddress: user.idAddress,
            active: user.active,
          },
          { where: { id: user.id } }
        ).then((user) => {
          
          req.session.user = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            idRol: user.idRol,
          };

          res.locals.user = req.session.user;
          res.redirect("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //BORRAR USUARIO
  deleteUser: (req, res) => {
    db.User.findByPk(res.locals.user.id)
      .then((user) => {
        db.User.update({ active: 0 }, { where: { id: user.id } })
          .then(() => {
            req.session.destroy();

            res.cookie("user", null, { maxAge: -1 });

            return res.redirect("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //DIRECCION DE USUARIO
  address: (req, res) => {
    let countries = fetch("https://restcountries.com/v3/all").then(
      (countries) => countries.json()
    );

    let user = db.User.findByPk(res.locals.user.id, {
      include: [{ association: "address" }],
    });

    Promise.all([user, countries])
      .then(([user, countries]) => {
        return res.render("addressForm", {
          title: "Direccion",
          user,
          countries,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  //ACTUALIZAR DIRECCION ASOCIADA AL USUARIO
  updateAddress: (req, res) => {
    db.User.findByPk(res.locals.user.id, {
      include: [{ association: "address" }],
    })
      .then((user) => {
        db.Address.update(
          {
            pais: req.body.pais ? req.body.pais : user.address.pais,
            localidad: req.body.localidad
              ? req.body.localidad
              : user.address.localidad,
            provincia: req.body.provincia
              ? req.body.provincia
              : user.address.provincia,
            calle: req.body.calle ? req.body.calle : user.address.calle,
            numero: req.body.numero ? +req.body.numero : user.address.numero,
            codigoPostal: req.body.postal
              ? req.body.postal
              : user.address.postal,
            departamento: req.body.departamento
              ? req.body.departamento
              : user.address.departamento,
          },
          {
            where: {
              id: user.idAddress,
            },
          }
        )
          .then(() => {
            res.redirect("/usuarios/direccion/" + req.params.id);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
