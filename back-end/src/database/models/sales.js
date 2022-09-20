'use strict';

const Sales = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tablename: 'sales',
    timestamps: false,
    underscored: true,
  });

  sales.associate = (models) => {
    sales.belongstoMany(models.users, { foreignKey: 'userId', as: 'user' });
    sales.belongstoMany(models.users, { foreignKey: 'sellerId', as: 'seller' });
    sales.hasMany(models.saleProducts, { foreignKey: 'saleId', as: 'saleProducts' });
  };

  return sales;
}

