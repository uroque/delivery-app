const ProductsServices = require('../services/productsService');
const http = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const products = await ProductsServices.getAllProducts();
  if (!products) {
    return res.status(http.notFoundStatus).json({ message: 'Not found' });
  }
  return res.status(http.okStatus).json(products);
};

module.exports = { getAll };