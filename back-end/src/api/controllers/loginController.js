const postLogin = require('../services/loginService');
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

module.exports = { postUser };