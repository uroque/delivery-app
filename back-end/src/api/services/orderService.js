const { sales, products, users } = require('../../database/models');

const getAllOrders = async (id) => {
  const data = await sales.findAll({ where: { userId: id } });
  if (!data) return null;
  
  return data;
};

const getOrdersAndProducts = async (id) => {
 const data = await sales.findAll({ 
  where: { id }, 
  include: [
    { model: users, as: 'userSeller' },
    { model: products, as: 'products' },
  ],
 });
 if (!data) return null;
 
 return data;
};

module.exports = { getAllOrders, getOrdersAndProducts };
