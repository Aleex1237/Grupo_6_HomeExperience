module.exports = (req, res, next) => {
  if (req.locals.userLogin && req.locals.userLogin.admin === true) {
    //si en locals existe userLogin y en userLogin.admin es true entonces prosigue al siguiente middleware o el controlador
    next();
  } else {
      //Si admin da false, se redireccionará al home
    res.redirect("/");
  }
};
