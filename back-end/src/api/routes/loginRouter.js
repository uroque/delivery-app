const express = require('express');
const validateToken = require('../middlewares/validToken');

const rota = express.Router();
 
const { postUser, postRegisterUser, getAll, getAllUsers } = require('../controllers/loginController');

// -----------GET----------------
rota.get('/admin/users', validateToken, getAll);
rota.get('/users', getAllUsers);

// -----------POST---------------
rota.post('/login', postUser);
rota.post('/register', postRegisterUser);
rota.post('/admin/register', validateToken, postRegisterUser);
// -----------PUT----------------

module.exports = rota;