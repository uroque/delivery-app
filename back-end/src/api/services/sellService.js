const { sales, salesProducts } = require('../../database/models');

const getAllSales = async () => {
  const data = await sales.findAll();
  if (!data) return null;
  return data;
};

const createSale = async (userId, { sale, products }) => {
  const status = false;
  const saleDate = Date.now();
  const createdSale = await sales.create({ ...sale, userId, saleDate, status });
  const bulkDB = salesProducts.bulkCreate(products.map(({ productId, quantity }) => ({
    saleId: createdSale.get().id,
    productId,
    quantity,
  })));
  return bulkDB;
};

module.exports = { getAllSales, createSale };