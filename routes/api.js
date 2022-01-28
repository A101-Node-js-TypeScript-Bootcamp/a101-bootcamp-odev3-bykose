const express = require('express');
let router = express.Router();

const productEndpoint = require('./product/product')

router.use('/product', productEndpoint)

module.exports = router;