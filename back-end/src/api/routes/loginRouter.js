const express = require('express');

const rota = express.Router();
const { postUser, postRegisterUser } = require('../controllers/loginController');

// -----------GET----------------
// -----------POST---------------
rota.post('/login', postUser);
rota.post('/register', postRegisterUser);
// -----------PUT----------------

module.exports = rota;