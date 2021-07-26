var express = require('express');
var router = express.Router();

const {cine, bar, detail , add, cart, save}= require('../controllers/productsController')

/* GET home page. */
router.get('/cine', cine);
router.get('/bar', bar);
router.get('/detalle/:id', detail);
router.get('/agregar', add);
router.post("/agregar", save); 
router.get('/carrito', cart);


module.exports = router;