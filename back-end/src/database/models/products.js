'use strict';

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tablename: 'products',
    timestamps: false,
    underscored: true,
  });

  products.associate = (models) => {
    products.belongsToMany(models.sales, { foreignKey: 'productId', through: models.salesProducts, as: 'soldProducts' });
  };

  return products;
}

