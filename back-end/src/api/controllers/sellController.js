const { getAllSales, createSale } = require('../services/sellService');
const http = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const sales = await getAllSales();
  console.log(sales.length);
  if (sales.length === 0) return res.json({ message: 'No sale' });
  return res.status(http.okStatus).json(sales);
};

const create = async (req, res) => {
  const { id } = req.params;
  const request = await createSale(id, req.body);
  return res.status(http.createdStatus).json(request.saleId);
};

module.exports = { getAll, create };
