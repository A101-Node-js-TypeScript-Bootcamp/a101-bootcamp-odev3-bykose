const productService = require('../services/products');

exports.add = async (req, res) => {
    const response = await productService.add(req.body)
    res.send(response)
}

exports.fetchAll = async (req, res) => {
    const response = await productService.fetchAll()
    res.send(response)
}

exports.fetchById = async (req, res) => {
    const response = await productService.fetchById(req.params)
    res.send(response)
}

exports.update = async (req, res) => {
    const response = await productService.update(req.body)
    res.send(response)
}

exports.delete = async (req, res) => {
    const response = await productService.delete(req.params)
    res.send(response)
}

exports.fetchByDiscountFilter = async (req, res) => {
    const response = await productService.fetchByDiscountFilter()
    res.send(response)
}