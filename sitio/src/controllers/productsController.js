const { validationResult } = require("express-validator");
const db = require("../database/models");
const { eliminarImagen } = require("../data/products_db");

module.exports = {
  bar: (req, res) => {
    db.Experience.findAll({
      where: {
        idCategory: 1,
        active: 1,
      },
      include: [
        {
          association: "images",
        },
      ],
    })
      .then((experiencias) =>
        res.render("bar", {
          title: "Experiencia bar",
          experiencias,
        })
      )
      .catch((error) => console.log(error));
  },

  cine: (req, res) => {
    db.Experience.findAll({
      where: {
        idCategory: 2,
        active: 1,
      },
      include: [
        {
          association: "images",
        },
      ],
    }).then((experiencias) =>
      res.render("cine", {
        title: "Expriencia cine",
        experiencias,
      })
    );
  },

  admin: (req, res) => {
    db.Experience.findAll({
      include: [
        {
          association: "images",
        },
        {
          association: "category",
        },
      ],
    })
      .then((productos) =>
        res.render("adminView", {
          title: "Lista de productos",
          productos,
        })
      )
      .catch((error) => console.log(error));
  },

  detail: (req, res) => {
    db.Experience.findOne({
      where: {
        id: req.params.id,
      },
      include: [{ association: "images" },
                { association: "products"}
              ],
    })
      .then((experience) => {
        if (experience.active == 1) {
          res.render("productDetail", {
            experience,
            title: "Producto: " + experience.name,
          });
        } else {
          res.redirect("/");
        }
      })
      .catch((error) => console.log(error));
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
    let productos = [];
    if (errors.isEmpty()) {
      try {
        //guardo experiencia
        let experiencia = await db.Experience.create({
          name: req.body.nombre,
          description: req.body.descripcion,
          price: Number(req.body.precio),
          idCategory: req.body.categoria,
          active: 1,
        });
        //guardo la imagen
        await db.Image.create({
          name: req.file ? req.file.filename : "default-product.png",
          idExperience: experiencia.id,
        });
        //guardo cada producto
        let i=1;
        while(req.body["product"+i]){
          let prod = {
            name: req.body["product"+i],
            idExperience: experiencia.id
          }
          productos.push(prod);
          i++
        }
        await db.Product.bulkCreate(productos);
        //guardo la relacion entre la experiencia y cada keyword
        let keywords = req.body.keywords.trim().split(" ");
        for (let i = 0; i < keywords.length; i++) {
          let keyword = await db.Keyword.findOne({
            where: {
              name: keywords[i],
            },
          });
          //si la keyword no existe, la creo
          if (!keyword) {
            keyword = await db.Keyword.create({
              name: keywords[i],
            });
          }
          //guardo relacion entre keyword y experiencia
          await db.KeywordExperience.create({
            idKeywords: keyword.id,
            idExperience: experiencia.id,
          });
        }
        res.redirect("/admin/productos");
      } catch (error) {
        console.log(error);
      }
    } else {
      //Si no se cumple  renderizará productLoad y guardará los errores en la variable errors y lo mapearan, old guardará lo que venga por el body.
      return res.render("productLoad", {
        errors:
          errors.mapped(), // el mapped ayuda a mostrar un error a la vez y diferenciar de que input es cada error ,
        title: "Agregar producto",
        old: req.body, // el old se encarga de la persistencia de datos del formulario ,
      });
    }  
  },

  load: async (req, res) => {
    try {
      //busco la experiencia por id
      let experiencia = await db.Experience.findOne({
        where: {
          id: req.params.id,
          active: 1,
        },
        include: [
          { association: "images" },
          { association: "products" },
          { association: "keywords" },
        ],
      });
      let keywords = "";
      for (let i = 0; i < experiencia.keywords.length; i++) {
        keywords = keywords + experiencia.keywords[i].name + " ";
      }
      return res.render("productUpdate", {
        title: "Modificar: " + experiencia.name,
        producto: experiencia,
        keywords,
      });
    } catch (err) {
      console.log(err);
    }
  },

  update: async (req, res) => {
    let index = 0;
    let errors = validationResult(req);
    let productos = [];
    if (errors.isEmpty()) {
      try {
        //busco la experiencia en uso
        let experiencia = await db.Experience.findOne({
          where: {
            id: +req.params.id,
          },
          include: [{ association: "images" }],
        });
        //si vino una nueva imagen,elimino la anterior
        if (req.file) {
          if(experiencia.images[0].name != "default-product.png"){
            eliminarImagen(experiencia.images[0].name);
           
          }
           //elimino anteriores referencias de imagen de
            //esta experiencia
          await db.Image.destroy({
            where: {
              idExperience: +req.params.id,
            },
          });
        }
        //guardo experiencia
        experiencia = await db.Experience.update(
          {
            name: req.body.nombre,
            description: req.body.descripcion,
            price: Number(req.body.precio),
            idCategory: req.body.categoria,
          },
          {
            where: {
              id: +req.params.id,
            },
          }
        );
        //guardo nueva imagen
        if (req.file) {
          await db.Image.create({
            name: req.file.filename,
            idExperience: +req.params.id,
          });
        }
        //elimino anteriores referencias de productos de
        //esta experiencia
        await db.Product.destroy({
          where: {
            idExperience: +req.params.id,
          },
        });
        //guardo cada producto
        let i=1;
        while(req.body["product"+i]){
          let prod = {
            name: req.body["product"+i],
            idExperience: +req.params.id
          }
          productos.push(prod);
          i++
        }
        await db.Product.bulkCreate(productos);
        //elimino relaciones keyword-experiencia anteriores
        await db.KeywordExperience.destroy({
          where: {
            idExperience: +req.params.id,
          },
        });
        //guardo la relacion entre la experiencia y cada keyword
        let keywords = req.body.keywords.trim().split(" ");
        for (let i = 0; i < keywords.length; i++) {
          let keyword = await db.Keyword.findOne({
            where: {
              name: keywords[i],
            },
          });
          //si la keyword no existe, la creo
          if (!keyword) {
            keyword = await db.Keyword.create({
              name: keywords[i],
            });
          }
          //guardo relacion entre keyword y experiencia
          await db.KeywordExperience.create({
            idKeywords: keyword.id,
            idExperience: +req.params.id,
          });
        }
        res.redirect("/admin/productos");
      } catch (err) {
        console.log(err);
      }
    } else {
      //busco la experiencia en uso
      let experiencia = await db.Experience.findOne({
        where: {
          id: +req.params.id,
        },
        include: [{ assocition: images }],
      });
      return res.render("productUpdate", {
        title: "Modificar: " + experiencia.name,
        producto: experiencia,
        keywords: req.body.keywords,
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  destroy: async (req, res) => {
    try {
      //modifico la experiencia en uso
      await db.Experience.update(
        {
          active: 0,
        },
        {
          where: {
            id: +req.params.id,
          },
        }
      );
      /*     //elimino la imagen
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
    }) */
      //Al terminar la ejecución que creá el producto se redicrecciona al usuarío hacia el home.
      res.redirect("/admin/productos");
    } catch (err) {
      console.log(err);
    }
  },
};
