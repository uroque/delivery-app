const express = require('express');

const rota = express.Router();
const sellController = require('../controllers/sellController');

// -----------GET----------------
// -----------POST---------------
rota.post('/custom/orders', sellController.create)
// -----------PUT----------------

module.exports = rota;