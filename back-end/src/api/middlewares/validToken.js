const jwt = require('jsonwebtoken');
const fs = require('fs');
const http = require('../utils/httpStatus');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Token not found' });
  }
  try {
    const { data } = jwt.verify(authorization, secret);
    req.user = data;
    next();
  } catch (error) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;