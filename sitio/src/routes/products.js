var express = require('express');
var router = express.Router();
const upload = require("../middlewares/multerConfig");
const {cine, bar, detail , add, cart, save, load, update,admin, destroy}= require('../controllers/productsController')
const addProductValidator= require('../validations/addProductValidator')

/* GET home page. */
router.get('/cine', cine);
router.get('/bar', bar);
router.get('/detalle/:id', detail);
router.get('/agregar', add);
router.post("/agregar", upload.single("imagen"), addProductValidator, save); 
router.get('/modificar/:id', load);
router.put("/modificar/:id", upload.single("imagen"), addProductValidator, update); 
router.get('/carrito', cart);

router.get("/admin",admin);
router.delete("/eliminar/:id",destroy)

module.exports = router;