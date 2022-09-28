const { sales, salesProducts } = require('../../database/models');

const getAllSales = async () => {
  const data = await sales.findAll();
  if (!data) return null;
  return data;
};

const createSale = async (userId, {
   seller,  
    total: totalPrice, address: deliveryAddress, number: deliveryNumber, orders: products }) => {
  const status = 'Pendente';
  const saleDate = Date.now();
  const createdSale = await sales.create({ 
    userId, sellerId: seller, totalPrice, deliveryAddress, deliveryNumber, status, saleDate });
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