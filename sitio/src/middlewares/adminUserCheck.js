module.exports = (req, res, next) => {
  if (res.locals.user && res.locals.user.admin === true) {  
    //si en locals existe userLogin y en userLogin.admin es true entonces prosigue al siguiente middleware o el controlador
    next();
  } else {
      //Si admin da false, se redireccionará al home
    res.redirect("/");
  }
};
