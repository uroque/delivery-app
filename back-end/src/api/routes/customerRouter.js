const express = require('express');
const validateToken = require('../middlewares/validToken');

const rota = express.Router();
const sellController = require('../controllers/sellController');
const orderController = require('../controllers/orderController')

// -----------GET----------------
rota.get('/customer/orders', validateToken, orderController.getOrderByUser );
// -----------POST---------------
rota.post('/customer/orders', validateToken, sellController.create);
// -----------PUT----------------

module.exports = rota;