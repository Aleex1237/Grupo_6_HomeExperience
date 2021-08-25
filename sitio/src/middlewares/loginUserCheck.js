var { leer } = require("../data/users_db");

var usuarios = leer();

module.exports = (req, res, next) => {
  if (req.session.user) {
    let usuario = usuarios.find(
      (usuario) => usuario.id === +req.session.user.id
    );
    res.locals.user = {
      id: usuario.id,
      name: usuario.name,
      admin: usuario.admin,
    };
    
    //Si existe en session user, se guardará en locals.user
    /* res.locals.user = req.session.user; */
  } else {
    if (req.cookies.user) {
        let usuario = usuarios.find(
            (usuario) => usuario.id === +req.cookies.user.id
          );
          res.locals.user = {
            id: usuario.id,
            name: usuario.name,
            admin: usuario.admin,
          };

      //Sino si cookies.user existe, locals guardará lo que está contenga.
      /* res.locals.user = req.cookies.user; */
    }
  }
  next();
};
