const jwt = require('jsonwebtoken');
const httt = require('../utils/httpStatus');

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Token not found' });
  }
  try {
    const secret = process.env.JWT_SECRET || 'jwt_secret';
    const { data } = jwt.verify(authorization, secret);
    next();
  } catch (error) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;