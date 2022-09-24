const express = require('express');

const rota = express.Router();
const ProductController = require('../controllers/productsController');

// -----------GET----------------
rota.get('/customer/products', ProductController.getAll);

module.exports = rota;