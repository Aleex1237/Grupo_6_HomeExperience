module.exports= {

    index: (req,res) => {
        return res.render('index',{
            title: "Home Experience",
        })
    },

    contact: (req,res) => {
        return res.render('contact',{
            title: "Contacto",
        })
    },

    experience: (req,res) => {
        return res.render('experience',{
            title: "Experiencias",
        })
    },

    about: (req,res) => {
        return res.render('about',{
            title: "Sobre nosotros",
        })
    },
}