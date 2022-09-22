const md5 = require('md5');
const { users } = require('../../database/models');
const Token = require('../utils/jwt');

const postLogin = async (email, password) => {
    const database = await users.findOne({ where: { email } });
    if (!database) return null;
    const emailData = database.email;
    const passwordData = database.password;
    if (email !== emailData) return null;
    if (md5(password) !== passwordData) return null;
    const token = Token({id: database.id, name: database.name, email: database.email});
    return {
      name: database.name,
      email: database.email,
      role: database.role,
      token: token
    };
};

module.exports = postLogin;
