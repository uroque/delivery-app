const { users } = require('../../database/models');

const postLogin = async (email, _password) => {
    const database = await users.findOne({ where: { email } });
    if (!database) return null;
    const emailData = database.email;
    if (email !== emailData) return null;    
    return database;
};
// FAZER A VALIDACAO DO PASSWORD COM O JWT

module.exports = postLogin;
