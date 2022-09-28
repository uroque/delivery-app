'use strict';

module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tablename: 'sales_products',
    timestamps: false, 
    underscored: true,
  });

  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, { foreignKey: 'saleId', through: salesProducts, as: 'products' });
    models.products.belongsToMany(models.sales, { foreignKey: 'productId', through: salesProducts, as: 'sales' });
  };

  return salesProducts;
} 
