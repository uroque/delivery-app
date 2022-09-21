const { users } = require('../../database/models');
const md5 = require('md5');

const postLogin = async (email, password) => {
    const database = await users.findOne({ where: { email } });
    if (!database) return null;
    const emailData = database.email;
    const passwordData = database.password
    if (email !== emailData) return null;
    if (md5(password) !== passwordData) return null

    return {
      name: database.name,
      email: database.email,
      role: database.role,
      token: 'token',
    };
};
// FAZER A VALIDACAO DO PASSWORD COM O JWT

module.exports = postLogin;
