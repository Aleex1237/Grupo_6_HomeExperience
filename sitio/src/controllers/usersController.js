
const db = require("../database/models");
const bcrypt = require("bcryptjs");
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

  logOut: (req, res) => {
    //ejecutamos destroy() sobre el session lo cual hará que nos deslogueemos.
    req.session.destroy();

    res.cookie("user", null, { maxAge: -1 });
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
  profile: (req, res) => {
    let usuario = db.User.findByPk(req.params.id, {
      include: [{ association: "genre" }],
    });

    let genre = db.Genre.findAll();
    /* let countries = fetch("https://restcountries.eu/rest/v2/all").then(
      (response) => response.json()
    );
    return res.json(countries); */
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
  deleteUser: (req, res) => {
    db.User.update(
      { active: +req.body.active },
      { where: { id: +req.params.id } }
    )
      .then((result) => {
        res.send(req.body);
      })
      .catch((err) => console.log(err));
  },
  updateProfile: (req, res) => {
    let index = 0;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === +req.params.id) {
          //si viene una nueva imagen y la qestaba no era la de default, elimina la imagen anterior
          if (req.file && users[i].image != "default-profile.png") {
            eliminarImagen(users[i].image);
          }
          users[i].name = req.body.nombre;

          users[i].image = req.file ? req.file.filename : users[i].image;

          users[i].pais = req.body.pais ? req.body.pais : "";

          users[i].direccion = req.body.direccion ? req.body.direccion : "";

          users[i].genero = req.body.genero ? req.body.genero : "pf";

          index = i; //guarda la posicion del elemento para luego poder acceder y enviarlo a la vista
        }
      }
      guardar(users);

      let usuario = users[index];
      
      res.render("index", { title: "Home experience" });
    } else {
      let usuario = users.find((usuario) => usuario.id === +req.params.id);
      return res.render("profile", {
        title: "Perfil: " + usuario.name,
        usuario,
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  address: (req, res) => {
    db.User.findByPk(req.params.id)
    .then((user) => {
      return res.render("addressForm", {
        title: "Direccion",
        user
      });
    }).catch((err) => {
      console.log(err);
    });
    
  },
  updateAddress: (req, res) => {
    db.Address.findAll()
    .then((address) => {
      res.json(address)
    }).catch((err) => {
      
    });
    db.Address.update(
      {
        pais: req.body.pais,
        localidad: req.body.localidad,
        provincia: req.body.provincia,
        calle: req.body.calle,
        numero: req.body.numero,
        codigoPostal: req.body.postal,
        departamento: req.body.departamento,
      },
      { where: 
        { 
          id: req.params.id 
        } 
      }
    ).then(() => {
      res.redirect("/usuarios/direccion/"+req.params.id)
    }).catch((err) => {
      console.log(err);
    });
  },
  list: (req, res) => {
    db.User.findAll({ include: [{ association: "rol" }] })
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
