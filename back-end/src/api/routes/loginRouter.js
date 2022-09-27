const express = require('express');

const rota = express.Router();
const { postUser, postRegisterUser, getAll } = require('../controllers/loginController');

// -----------GET----------------
rota.get('/users', getAll);
// -----------POST---------------
rota.post('/login', postUser);
rota.post('/register', postRegisterUser);
// -----------PUT----------------

module.exports = rota;