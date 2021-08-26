var express = require('express');
var router = express.Router();

const {cine, bar, detail , add, cart, save, load, update,admin, destroy}= require('../controllers/productsController')

const noUserLoged=require("../middlewares/noUserLoged");

/* GET home page. */
router.get('/cine', cine);

router.get('/bar',noUserLoged ,bar);

router.get('/detalle/:id', detail);

router.get('/carrito', noUserLoged, cart);




module.exports = router;