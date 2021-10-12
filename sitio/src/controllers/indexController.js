const { validationResult } = require("express-validator");
const db = require("../database/models");

module.exports = {
  index: (req, res) => {
    return res.render("index", {
      title: "Home Experience",
    });
  },
  footerPost: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      
      db.Suscription.create({
        email: req.body.letter,
      })
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.render("index", {
        title: "Home experience",
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },

  contact: (req, res) => {
    return res.render("contact", {
      title: "Contacto",
    });
  },
  contactPost: (req, res) => {
    //En la variable errors guardamos los resultados de las validaciones
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      //Si errores está vacio se creará un objeto literal el cual contiene clave y valor.
      db.Suscription.create({
        email: req.body.email,
        description: req.body ? req.body.textArea : null
      })
        .then(() => {
          res.redirect("/contacto");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.render("contact", {
        errors: errors.mapped(),
        title: "Contacto",
        old: req.body,
      });
    }
  },

  experience: (req, res) => {
    return res.render("experience", {
      title: "Experiencias",
    });
  },

  about: (req, res) => {
    return res.render("about", {
      title: "Sobre nosotros",
    });
  },
};
