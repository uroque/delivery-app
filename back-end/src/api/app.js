const express = require('express');
const routerLogin = require('./routes/loginRouter');
const routerProducts = require('./routes/productsRouter');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(express.json());
app.use(accessControl);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(routerLogin);
app.use(routerProducts);
console.log('teste', __dirname);
app.use(express.static('public'));

module.exports = app;