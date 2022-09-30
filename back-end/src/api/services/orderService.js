const { sales, products, users } = require('../../database/models');

const getAllOrders = async (id, role) => {
  let data = null;
  if (role === 'customer') {
    data = await sales.findAll({ where: { userId: id } });
  } else if (role === 'seller') {
    data = await sales.findAll({ where: { sellerId: id } });
  }  
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

const updateStatus = async (id, status) => {
  const data = await sales.update({ status }, { where: { id } });
  if (!data) return null;
  return data;
};

module.exports = { getAllOrders, getOrdersAndProducts, updateStatus };
