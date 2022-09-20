'use strict';

const SalesProducts = (sequelize, DataTypes) => {
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
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tablename: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  salesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, { foreignKey: 'saleId', through: salesProducts, as: 'products' });
    models.Products.belongsToMany(models.Sales, { foreignKey: 'productId', through: salesProducts, as: 'sales' });
  };

  return salesProducts;
}

