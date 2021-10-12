module.exports=(req,res,next)=>{
    if(res.locals.user){
        res.send("Ya estas registrado")

        //res.render(error,{msg:"ya estas logueado"})
    }
    next()
    
}