const express = require('express');

const rota = express.Router();
const sellController = require('../controllers/sellController');

// -----------GET----------------
rota.get('/seller/orders', sellController.getAll);
// -----------POST---------------
rota.post('/customer/orders', sellController.create)
// -----------PUT----------------

module.exports = rota;