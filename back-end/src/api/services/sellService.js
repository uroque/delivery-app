const { sales, salesProducts, users } = require('../../database/models');

const getAllSales = async () => {
  const data = await sales.findAll();
  if (!data) return null;
  return data;
};

const createSale = async (userId, {
   seller: sellerName,  
    total: totalPrice, address: deliveryAddress, number: deliveryNumber, orders: products }) => {
  const { id } = await users.findOne({ where: { name: sellerName } });
  const status = 'Pendente';
  const saleDate = Date.now();
  const createdSale = await sales.create({ 
    userId, sellerId: id, totalPrice, deliveryAddress, deliveryNumber, status, saleDate });
  const bulkDB = await salesProducts.bulkCreate(products.map((product) => ({
    saleId: createdSale.get().id,
    productId: product.id,
    quantity: product.qtd,
  })));

  return {
    createdSale,
    bulkDB,
  };
};

module.exports = { getAllSales, createSale };