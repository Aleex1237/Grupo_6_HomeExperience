const productos = require("../data/products_db")

module.exports = {

    bar: (req, res) => {
        return res.render('bar', {
            title: "Experiencia Bar",
            productos,
            productosBar: productos.filter(producto => producto.category === "bar"),
        })
    },

    cine: (req, res) => {
        return res.render('cine', {
            title: "Experiencia Cine",
            productos,
            productosCine: productos.filter(producto => producto.category === "cine"),
        })
    },

    detail: (req, res) => {
        return res.render('productDetail', {
            title: "",
        })
    },

    cart: (req, res) => {
        return res.render('productCart', {
            title: "Carrito",
        })
    },

    add: (req, res) => {
        return res.render('productLoad', {
            title: "Agregar producto",
        })
    },
}