const express = require('express');

const rota = express.Router();
const { postUser, postRegisterUser, getAllUsers } = require('../controllers/loginController');

// -----------GET----------------
rota.get('/users', getAllUsers);
// -----------POST---------------
rota.post('/login', postUser);
rota.post('/register', postRegisterUser);
// -----------PUT----------------

module.exports = rota;