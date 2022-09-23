const jwt = require('jsonwebtoken');
const http = require('../utils/httpStatus');
const secret = require('fs').readFileSync('../../../jwt.evaluation.key', { encoding: "utf-8" });

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Token not found' });
  }
  try {
    const { data } = jwt.verify(authorization, secret);
    req.body.data = data;
    next();
  } catch (error) {
    return res.status(http.HTTP_UNAUTHORIZE).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidation;