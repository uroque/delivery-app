const express = require('express');

const rota = express.Router();
const { postUser } = require('../controllers/loginController');

// -----------GET----------------
// -----------POST---------------
rota.post('/', postUser);
// -----------PUT----------------

module.exports = rota;