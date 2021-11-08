const router = require('express').Router();
const adminUserCheck = require("../../middlewares/adminUserCheck");
const adminApi = require('../../controllers/api/admin')
const adminController = require("../../controllers/productsController")



router.get("/", adminUserCheck, adminApi.admin);

router.put("/mostrar", adminController.productActive);

router.put("/ocultar", adminController.productHide);

router.get("/buscar", adminApi.search);


module.exports = router;