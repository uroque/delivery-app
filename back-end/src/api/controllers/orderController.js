const orderService = require('../services/orderService');
const http = require('../utils/httpStatus');

const getOrderByUser = async (req, res) => {
  try {
    const { id, role } = req.user;
    const request = await orderService.getAllOrders(id, role);
    if (!request) return res.status(http.notFoundStatus).json({ message: 'Not Found' });
    return res.status(http.okStatus).json(request);
  } catch (error) {
    console.log(error);
  }
};

const getOrdersAndProducts = async (req, res) => {
  const data = await orderService.getOrdersAndProducts(req.params.id);
  if (!data) return res.status(http.notFoundStatus).json({ message: 'Not Found' });
  return res.status(http.okStatus).json(data);
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = await orderService.updateStatus(id, status);
  if (!data) return res.status(http.notFoundStatus).json({ message: 'Not Found' });
  return res.status(http.okStatus).json(data);
};

module.exports = { getOrderByUser, getOrdersAndProducts, updateStatus };
