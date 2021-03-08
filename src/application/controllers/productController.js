const productService = require('../../domain/productService');

function getById(req, res) {
    const id = req.params.id;
    const response = productService.getProductById(id);
    res.json(response);
}

function getAll(req, res) {
    const response = productService.getAll();
    res.json(response);
}

function addProduct(req,res) {
    const body = req.body;
    const response = productService.addProduct(body);
    res.json(response);
}

function update(req,res) {
    const id = req.params.id;
    const body = req.body;
    const response = productService.update(id,body);
    res.json(response);
}

function deleteProduct(req,res) {
    const id = req.params.id;
    const response = productService.deleteProduct(id);
    res.json(response);
}

module.exports = {
    getById,
    getAll,
    addProduct,
    update,
    deleteProduct
}