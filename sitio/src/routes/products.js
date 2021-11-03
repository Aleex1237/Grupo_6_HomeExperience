var express = require('express');
var router = express.Router();

const {cine, bar, detail , cart, cineSearch,barSearch}= require('../controllers/productsController')

const noUserLoged=require("../middlewares/noUserLoged");

/* GET home page. */
router.get('/cine', cine);

router.get('/cine/buscar', cineSearch)

router.get('/bar',noUserLoged ,bar);

router.get('/bar/buscar',noUserLoged ,barSearch);

router.get('/detalle/:id', detail);

router.get('/carrito', noUserLoged, cart);




module.exports = router;