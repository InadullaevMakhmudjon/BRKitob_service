module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  Order.associate = (models) => {
    Order.hasMany(models.BookOrder, { as: 'products' });
    Order.belongsTo(models.OrderType, { as: 'type' });
    Order.belongsTo(models.OrderStatus, { as: 'status' });
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Order.belongsTo(models.Payment, { as: 'payment', foreignKey: 'paymentId' });
  };
  return Order;
};
