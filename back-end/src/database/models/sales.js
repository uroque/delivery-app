'use strict';

module.exports = (sequelize, DataTypes) => {
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
    sales.belongsTo(models.users, { foreignKey: 'userId', as: 'userBuyer' });
    sales.belongsTo(models.users, { foreignKey: 'sellerId', as: 'userSeller' });
  };

  return sales;
} 

