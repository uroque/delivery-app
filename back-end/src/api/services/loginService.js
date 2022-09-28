const md5 = require('md5');
const { Op } = require('sequelize');
const { users } = require('../../database/models');
const Token = require('../utils/jwt');

const postLogin = async (email, password) => {
    const database = await users.findOne({ where: { email } });
    if (!database) return null;
    const emailData = database.email;
    const passwordData = database.password;
    if (email !== emailData) return null;
    if (md5(password) !== passwordData) return null;
    const token = Token({ id: database.id, 
      name: database.name, 
      email: database.email, 
      role: database.role,
    });
    return { 
      name: database.name,
      email: database.email,
      role: database.role,
      token,
    };
};

const postRegister = async (name, email, password, role) => {
    const database = await users.findAll({ where: { [Op.or]: [{ email }, { name }] } });
    if (database.length > 0) return null;
    let userRole = role;
    if (!role) { userRole = 'customer'; }
    const { id } = await users.create({ name, email, password: md5(password), role: userRole });
    const token = Token({ 
      id, 
      name,
      email,
      role: userRole,
    });
    return {
      name,
      email,
      role: userRole,
      token,
    };
};

const getAllUsers = async () => {
  const allUser = await users.findAll();
  return allUser;
};
 
const getAllUsersService = async () => {
  const database = await users.findAll();
  if (!database) return null;
  return database;
};

module.exports = { postLogin, postRegister, , getAllUsers, getAllUsersService };
