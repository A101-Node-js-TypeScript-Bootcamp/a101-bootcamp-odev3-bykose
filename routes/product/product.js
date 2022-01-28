const express = require('express');
const productController=require('../../controllers/Product')
let router = express.Router();

router.get("/",productController.fetchAll)
router.post("/add",productController.add)
router.get("/:id",productController.fetchById)
router.get("/filter/isdiscount",productController.fetchByDiscountFilter)
router.delete("/:id",productController.delete)
router.put("/",productController.update)

module.exports = router;