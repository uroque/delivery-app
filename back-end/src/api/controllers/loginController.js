const { postLogin, postRegister } = require('../services/loginService');
const http = require('../utils/httpStatus');

const postUser = async (req, res) => {
  const { email, password } = req.body;
  const User = await postLogin(email, password);
  if (!User) {
  return res.status(http.notFoundStatus).json({ message: 'Not found' });
  }
 
  return res.status(http.okStatus).json(User);
  // O avaliador espera que apareça na tela um elemento, antes oculto, com uma mensagem de erro qualquer.
  // Elemento: common_login__element-invalid-email
};

const postRegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  const User = await postRegister(name, email, password);
  if (!User) {
  return res.status(http.conflictStatus).json({ message: 'O usuário já existe' });
  }
  res.status(201).json(User);
};

module.exports = { postUser, postRegisterUser };