module.exports = (req,res,next)=>{
    if(req.session.user){
        //Si existe en session user, se guardará en locals.user
        res.locals.user = req.session.user;
    }else{
        if(req.cookies.user){
            //Sino si cookies.user existe, locals guardará lo que está contenga.
            res.locals.user = req.cookies.user;
        }
    }
    next();
}