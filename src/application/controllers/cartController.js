const cartService = require('../../domain/cartService');

function getById(req, res) {
    const id = req.params.id;
    const response = cartService.getProductById(id);
    res.json(response);
}

function getAll(req, res) {
    const response = cartService.getAll();
    res.json(response);
}

function addProduct(req,res) {
    const body = req.body;
    const response = cartService.addProduct(body);
    res.json(response);
}

function deleteProduct(req,res) {
    const id = req.params.id;
    const response = cartService.deleteProduct(id);
    res.json(response);
}

module.exports = {
    getById,
    getAll,
    addProduct,
    deleteProduct
}