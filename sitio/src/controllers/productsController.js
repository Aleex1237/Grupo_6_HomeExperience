const { leer, guardar, obtenerProximoId, eliminarImagen } = require("../data/products_db");
let productos = leer();
const { validationResult } = require("express-validator");

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
    let relacionados = [];
    for(let i=0;i<productos.length;i++){ //recorro elarray de productos
      let senal=false;//se activara si el producto analizado contiene alguna keyword
                      //del producto que estoy x mostrar en el detalle
      for(let j=0;j<producto.keywords.length;j++){ //tomo cada keyword de "producto"
          if(!(producto.id===productos[i].id) && productos[i].keywords.includes(producto.keywords[j])){
            //si elproducto que estoy revisando contiene la keyword de 
            senal=true;
          }
      }
      if(senal && relacionados.length<4){
        relacionados.push(productos[i]);
      }
    }
    return res.render("productDetail", {
      title: "Detalle de Experiencia: " + producto.name,
      producto,
      relacionados
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
  save: (req, res) => {
    let errors = validationResult(req);
    let lista = [req.body.product1, req.body.product2];
    if(req.body.product3){
      lista.push(req.body.product3);
      if(req.body.product4){
        lista.push(req.body.product4);
      }
    }

    if (errors.isEmpty()) {
      let producto = {
        id: obtenerProximoId(),
        name: req.body.nombre,
        description: req.body.descripcion,
        image: req.file.filename,
        price: Number(req.body.precio),
        category: req.body.categoria,
        productList: lista,
        keywords: req.body.keywords.trim().split(" "),
      };
      productos.push(producto);
      guardar(productos);
      res.redirect("/productos/admin  ");
    } else {
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
  update: (req, res) => {
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
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === +req.params.id) {
          if(req.file){
            eliminarImagen(productos[i].image)
          };
          productos[i].name = req.body.nombre;
          productos[i].description = req.body.descripcion;
          productos[i].price = Number(req.body.precio);
          productos[i].category = req.body.categoria;
          productos[i].image = req.file ? req.file.filename : productos[i].image;
          productos[i].productList =lista,
          productos[i].keywords = req.body.keywords.trim().split(" ");
  
          index = i;
        }
      }
      guardar(productos);
      let producto = productos[index];
      let relacionados = [];
      for(let i=0;i<productos.length;i++){ //recorro elarray de productos
        let senal=false;//se activara si el producto analizado contiene alguna keyword
                        //del producto que estoy x mostrar en el detalle
        for(let j=0;j<producto.keywords.length;j++){ //tomo cada keyword de "producto"
            if(!(producto.id===productos[i].id) && productos[i].keywords.includes(producto.keywords[j])){
              //si elproducto que estoy revisando contiene la keyword de 
              senal=true;
            }
        }
        if(senal && relacionados.length<4){
          relacionados.push(productos[i]);
        }
    }
      return res.render("productDetail", {
        title: "Detalle de Experiencia: " + producto.name,
        producto,
        relacionados
      });
    }else{
      let producto = productos.find((producto) => producto.id === +req.params.id);
      return res.render("productUpdate", {
        title: "Modificar: " + producto.name,
        producto,
        keywords: req.body.keywords,
        errors: errors.mapped(),
        old: req.body
      });
    }
    
  },
  destroy: (req, res) => {
  let id = req.params.id;
  //creamos un loop en el que nuestra variable iteradora es igual a 0 y mientras el iterador sea menor a la longitud del array se le sumara 1.
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id == id) {
      //en products en la posicion i entramos al id (products=>product.id) y si matchea con el id pasado por parametro en la url se ejecutará el splice
      eliminarImagen(productos[i].image);
      productos.splice(i, 1);
      //al utilizar el metodo splice sobre products indicamos que queremos que "corte" desde donde i está parado y cuantos elementos del array queremos que elimine, en este caso queremos que solo "corte" uno
    }
  }
  //En la función guardar se ejecuta  el modulo fs con su metodo writeFileSync y JSON.stringify lo que guardará la variable y la stringificara para que pueda ser una lectura mas eficiente hacía otros lenguajes
  guardar(productos);

  //Al terminar la ejecución que creá el producto se redicrecciona al usuarío hacia el home.
  res.redirect("/productos/admin");
  },

};
