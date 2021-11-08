var express = require('express');
var router = express.Router();

const {show,add, remove,empty,checkout} = require('../controllers/cartsController');

/* endpoints: /api/carts */
router 
    .get('/show',show)
    .get('/add/:id',add)
    .get('/remove/:id',remove)
    .get('/empty',empty)
    .get('/checkout',checkout);


module.exports = router;