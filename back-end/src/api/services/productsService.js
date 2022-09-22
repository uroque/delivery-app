const { products } = require('../../database/models')


const getAllProducts = async () => {
  const data = await products.findAll();
  if (!data) return null;

  return data
}

module.exports = { getAllProducts };