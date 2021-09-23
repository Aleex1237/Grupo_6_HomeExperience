module.exports= (req,res,next)=>{
    if(res.locals.user && res.locals.user.id === +req.params.id ){
        next()
    }else{
        res.redirect(`/usuarios/perfil/${res.locals.user.id}`)
    }
}