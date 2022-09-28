const jwt = require('jsonwebtoken');
const fs = require('fs');
 
const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

require('dotenv').config();

const Token = (data) => {
    const { id, name, email, role } = data;
    const user = { id, name, email, role };
    
    // mudar o tempo de expiracao depois passar
    const token = jwt.sign({ data: user }, secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

  return token;
};

module.exports = Token; 
