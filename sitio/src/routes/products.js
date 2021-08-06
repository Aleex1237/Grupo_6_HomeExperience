var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multerConfig");
const {cine, bar, detail , add, cart, save, load, update}= require('../controllers/productsController')

/* GET home page. */
router.get('/cine', cine);
router.get('/bar', bar);
router.get('/detalle/:id', detail);
router.get('/agregar', add);
router.post("/agregar", upload.single("imagen"), save); 
router.get('/modificar/:id', load);
router.put("/modificar/:id", upload.single("imagen"), update); 
router.get('/carrito', cart);


module.exports = router;