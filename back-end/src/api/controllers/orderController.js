const orderService = require('../services/orderService');
const http = require('../utils/httpStatus');

const getOrderByUser = async (req, res) => {
  try {
    const { id } = req.user;
    console.log('aqui', id)
    const request = await orderService.getAllOrders(id);
    if(!request) return res.status(http.notFoundStatus).json({ message: 'Not Found' }) 
    return res.status(http.okStatus).json(request);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getOrderByUser };
