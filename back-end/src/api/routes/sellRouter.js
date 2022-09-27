const express = require('express');
const validateToken = require('../middlewares/validToken');

const rota = express.Router();
const sellController = require('../controllers/sellController');

// -----------GET----------------
// -----------POST---------------
rota.post('/customer/orders', validateToken, sellController.create);
// -----------PUT----------------

module.exports = rota;