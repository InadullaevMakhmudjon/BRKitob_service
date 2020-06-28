
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  Order.associate = (models) => {
    Order.hasMany(models.BookOrder, { as: 'products' });
    Order.belongsTo(models.OrderStatus, { as: 'status' });
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };
  return Order;
};
