const jwt = require('jsonwebtoken');

require('dotenv').config();

const Token = (data) => {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    const { id, name, email} = data;
    const user = { id, name, email };
    // mudar o tempo de expiracao depois passar
    const token = jwt.sign({ data: user }, secret, {
        expiresIn: '365d',
        algorithm: 'HS256',
 });
  return token;
};

module.exports = Token; 
