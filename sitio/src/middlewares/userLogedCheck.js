module.exports=(req,res,next)=>{
    if(res.locals.user){
        res.redirect("/usuarios/perfil")
    }
    next()
    
}