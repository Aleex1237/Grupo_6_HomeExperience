const {leer, guardar, obtenerProximoId} = require("../data/products_db");
let productos = leer();

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
        let producto = productos.find(producto=> producto.id===+req.params.id);
        return res.render('productDetail', {
            title: "Detalle de Experiencia: "+producto.name,
            producto
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
    save: (req, res) => {
        let producto = {
            id:obtenerProximoId(),
            name:req.body.nombre,
            description:req.body.descripcion,
            image:"pulp-fiction.png",
            price:Number(req.body.precio),
            category:req.body.categoria
        };
        productos.push(producto);
        guardar(productos);
        res.redirect("/");
    }
}