'use strict';

const Products = (sequelize, DataTypes) => {
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
    products.hasMany(models.saleProducts, { foreignKey: 'productId', as: 'products' });
  };

  return products;
}

