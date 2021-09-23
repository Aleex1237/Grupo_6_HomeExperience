//const { leer, guardar, obtenerProximoId, eliminarImagen } = require("../data/products_db");
//let productos = leer();
const { validationResult } = require("express-validator");
let db = require("../database/models");

module.exports = {
  bar: (req, res) => {
    return res.render("bar", {
      title: "Experiencia Bar",
      productos,
      productosBar: productos.filter((producto) => producto.category === "bar"),
    });
  },

  cine: (req, res) => {
    return res.render("cine", {
      title: "Experiencia Cine",
      productos,
      productosCine: productos.filter(
        (producto) => producto.category === "cine"
      ),
    });
  },

  admin: (req, res) => {
    return res.render("adminView", {
      title: "Administrador",
      productos,
    });
  },

  detail: (req, res) => {
    let producto = productos.find((producto) => producto.id === +req.params.id);
    return res.render("productDetail", {
      title: "Detalle de Experiencia: " + producto.name,
      producto,
    });
  },

  cart: (req, res) => {
    return res.render("productCart", {
      title: "Carrito",
    });
  },

  add: (req, res) => {
    return res.render("productLoad", {
      title: "Agregar producto",
    });
  },

  save: async (req, res) => {
    let errors = validationResult(req);
    let lista = [req.body.product1, req.body.product2];//lista de productos
    if(req.body.product3){
      lista.push(req.body.product3);
      if(req.body.product4){
        lista.push(req.body.product4);
      }
    }

    if (errors.isEmpty()) {
      try{
        //guardo experiencia
        let experiencia = await db.Experience.create({
          name: req.body.nombre,
          description: req.body.descripcion,
          image: req.file.filename,
          price: Number(req.body.precio),
          idCategory: req.body.categoria,
          active:1
        });
        //guardo la imagen
        await db.Image.create({
          name: req.file,
          idExperience: experiencia.id
        })
        //guardo cada producto
        let productos = [];
          for(let i=0;i<lista.length;i++){
            let producto = {
                name:lista[i],
                idExperience: experiencia.id
            }
            productos.push(producto);
          }
          await db.Product.bulkCreate(productos);
          //guardo la relacion entre la experiencia y cada keyword
          let keywords = req.body.keywords.trim().split(" ");
            for(let i=0;i<keywords.length;i++){
              let keyword = await db.Keyword.findOne({
                where:{
                  name: keywords[i]
                }
              });
              //si la keyword no existe, la creo
              if(!keyword){
                await db.Keyword.create({
                  name:keywords[i]
                });
              }
              //guardo relacion entre keyword y experiencia
              await db.KeywordExperience.create({
                  idKeywords: keyword.id,
                  idExperience: experiencia.id
                });
            }
            res.redirect("/productos/admin");

      }catch(error){
        console.log(error);
      } 

    } else {
      //Si no se cumple  renderizará productLoad y guardará los errores en la variable errors y lo mapearan, old guardará lo que venga por el body.
      return res.render("productLoad", {
        errors:
          errors.mapped() /* el mapped ayuda a mostrar un error a la vez y diferenciar de que input es cada error */,
        title: "Agregar producto",
        old: req.body /* el old se encarga de la persistencia de datos del formulario */,
      });
    }
  },

  load: (req, res) => {
    let producto = productos.find((producto) => producto.id === +req.params.id);
    let keywords = "";
    for (let i = 0; i < producto.keywords.length; i++) {
      keywords = keywords + producto.keywords[i] + " ";
    }
    return res.render("productUpdate", {
      title: "Modificar: " + producto.name,
      producto,
      keywords,
    });
  },

  update: async (req, res) => {
    let index = 0;
    let errors = validationResult(req);
    let lista = [req.body.product1, req.body.product2];
    if(req.body.product3){
      lista.push(req.body.product3);
      if(req.body.product4){
        lista.push(req.body.product4);
      }
    }
    if(errors.isEmpty()){
      try{
        //busco la experiencia en uso
        let experiencia = await db.Experience.findOne({
          where:{
            id: +req.params.id
          },
          include:[
            {assocition:images}
          ]
        });
        //si vino una nueva imagen,elimino la anterior
        if(req.file){
          eliminarImagen(experiencia.images[0]);
          //elimino anteriores referencias de imagen de
          //esta experiencia
          await db.Image.destroy({
            where:{
              idExperience: +req.params.id
            }
          })
        }
        //guardo experiencia
        let experiencia = await db.Experience.update(
        {
          name: req.body.nombre,
          description: req.body.descripcion,
          image: req.file.filename,
          price: Number(req.body.precio),
          idCategory: req.body.categoria
        },
        {
          where:
          {
            id: +req.params.id
          }
        });
        //guardo nueva imagen
        await db.Image.create({
          name: req.file,
          idExperience: experiencia.id
        })
        //elimino anteriores referencias de productos de
        //esta experiencia
        await db.Product.destroy({
          where:{
            idExperience: +req.params.id
          }
        })
        //guardo cada producto
        let productos = [];
          for(let i=0;i<lista.length;i++){
            let producto = {
                name:lista[i],
                idExperience: experiencia.id
            }
            productos.push(producto);
          }
          await db.Product.bulkCreate(productos);
          //elimino relaciones keyword-experiencia anteriores
          await db.KeywordExperience.destroy({
            where:{
              idExperience: +req.params.id
            }
          })
          //guardo la relacion entre la experiencia y cada keyword
          let keywords = req.body.keywords.trim().split(" ");
            for(let i=0;i<keywords.length;i++){
              let keyword = await db.Keyword.findOne({
                where:{
                  name: keywords[i]
                }
              });
              //si la keyword no existe, la creo
              if(!keyword){
                await db.Keyword.create({
                  name:keywords[i]
                });
              }
              //guardo relacion entre keyword y experiencia
              await db.KeywordExperience.create({
                  idKeywords: keyword.id,
                  idExperience: experience.id
                });
            }
            res.redirect("/productos/admin");

      }catch(err){
        console.log(error);
      }

    }else{
      //busco la experiencia en uso
      let experiencia = await db.Experience.findOne({
        where:{
          id: +req.params.id
        },
        include:[
          {assocition:images}
        ]
      });
      let producto = productos.find((producto) => producto.id === +req.params.id);
      return res.render("productUpdate", {
        title: "Modificar: " + experiencia.name,
        producto: experiencia,
        keywords: req.body.keywords,
        errors: errors.mapped(),
        old: req.body
      });
    }
    
  },

  destroy: async (req, res) => {
  try{
    //busco la experiencia en uso
    let experiencia = await db.Experience.findOne({
      where:{
        id: +req.params.id
      },
      include:[
        {assocition:images}
      ]
    });
    //elimino la imagen
    eliminarImagen(experiencia.images[0]);
    //elimino los productos asociados
    await db.Product.destroy({
      where:{
        idExperience: +req.params.id
      }
    })
    //elimino las asaociaciones con keywords
    await db.KeywordExperience.destroy({
      where:{
        idExperience: +req.params.id
      }
    })
    //elimino las images asociadas
    await db.Image.destroy({
      where:{
        idExperience: +req.params.id
      }
    })
    //elimino la experiencia
    await db.Experience.destroy({
      where:{
        id: +req.params.id
      }
    })
    //Al terminar la ejecución que creá el producto se redicrecciona al usuarío hacia el home.
    res.redirect("/admin/productos");
  }catch(err){
    console.log(err)
  }
  
  },

};
