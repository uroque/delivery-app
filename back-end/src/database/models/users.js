'use strict';

const User = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tablename: 'users',
    timestamps: false,
    underscored: false,
  });

  users.associate = (models) => {
    users.hasMany(models.sales, { foreignKey: 'userId', as: 'user' });
    users.hasMany(models.sales, { foreignKey: 'sellerId', as: 'seller' });
  };

  return users;
}

