const { getAllSales, createSale } = require('../services/sellService');
const http = require('../utils/httpStatus');

const getAll = async (_req, res) => {
  const sales = await getAllSales();
 
  if (sales.length === 0) return res.json({ message: 'No sale' });
  return res.status(http.okStatus).json(sales);
};

const create = async (req, res) => {
  try {
    const { id } = req.user;
    const request = await createSale(id, req.body); 
    return res.status(http.createdStatus).json(request.bulkDB);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, create };
