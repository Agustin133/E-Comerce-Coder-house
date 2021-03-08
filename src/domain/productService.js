const { response } = require("express");

let items = [];
let id = 0;

function getProductById(id) {
    if(items.length == 0){
        const response = ('No files uploaded');
        return response;
    }
    const item = items.find(item => item.id == id);
    if(!item){
       const response = ('Product not found');
       return response;
    }
    const response = item;
    return response;
}

function getAll() {
    if(items.length == 0){
        const response = ('No files uploaded');
        return response;
    }
    const response = items;
    return response;
}

function addProduct(body) {
    id = id + 1;
    const date = new Date(); 
    let timestamp = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}-${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    const { title, price, thumbnail, code, stock, description } = body;
    const item = {
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description,
        id
    }
    items.push(item);
    const response = ("Product added succsessfully");
    return response;
}

function update(id,body) {
    if(items.length == 0){
        const response = ('No products loaded');
        return response;
    }
    const item = items.find(item => item.id == id);
    if(!item){
       const response = ('Product not found');
       return response;
    }

    const {title} = body;
    const {price} = body;
    const {stock} = body;
    const {code} = body;
    const {thumbnail} = body;
    const {timestamp} = body;
    const {description} = body;

    item.title = title;
    item.price = price;
    item.stock = stock;
    item.code = code;
    item.thumbnail = thumbnail;
    item.timestamp = timestamp;
    item.description = description;

    const response = ('Product updated successfully');
    return response;
}

function deleteProduct(id) {
    if(items.length == 0){
        const response = ('No products loaded');
        return response;
    }
    const item = items.find( item => item.id == id);
    if(!item){
       const response = ('Product not found');
       return response;
    }
    items = items.filter(item => item.id != id);
    const response = ('Product deleted successfully');
    return response;
}


module.exports = {
    getProductById,
    getAll,
    addProduct,
    update,
    deleteProduct
}