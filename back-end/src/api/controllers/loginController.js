 
const { postLogin, postRegister, getAllUsers, getAllUsersService } = require('../services/loginService');
 
const http = require('../utils/httpStatus');

const postUser = async (req, res) => {
  const { email, password } = req.body;
  const User = await postLogin(email, password);
  if (!User) {
  return res.status(http.notFoundStatus).json({ message: 'Not found' });
  }
 
  return res.status(http.okStatus).json(User);
};

const postRegisterUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  const User = await postRegister(name, email, password, role);
  if (!User) {
  return res.status(http.conflictStatus).json({ message: 'O usuário já existe' });
  }
  res.status(201).json(User);
};

const getAll = async (req, res) => {
  const users = await getAllUsers();
  if (!users) {
    return res.status(http.notFoundStatus).json({ message: 'Not found' });
  }
  return res.status(http.okStatus).json(users);
};
 
const getAllUsers = async (_req, res) => {
    const users = await getAllUsersService();
    if (!users) return res.status(404).json({ message: 'Not found' });
  
    res.status(200).json(users);
};

module.exports = { postUser, postRegisterUser, getAll, getAllUsers };
 
