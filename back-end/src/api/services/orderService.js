const { sales } = require('../../database/models');

const getAllOrders = async (id) => {
  const data = await sales.findAll({ where: { userId: id } });
  if (!data) return null;
  
  return data;
};

module.exports = { getAllOrders };
