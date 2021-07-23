module.exports= {

    bar: (req,res) => {
        return res.render('bar',{
            title: "Experiencia Bar",
        })
    },

    cine: (req,res) => {
        return res.render('cine',{
            title: "Experiencia Cine",
        })
    },

    detail: (req,res) => {
        return res.render('productDetail',{
            title: "",
        })
    },

    cart: (req,res) => {
        return res.render('productCart',{
            title: "Carrito",
        })
    },

    add: (req,res) => {
        return res.render('productLoad',{
            title: "Agregar producto",
        })
    },
}