
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  Order.associate = (models) => {
    Order.hasMany(models.BookOrder, { as: 'books' });
    Order.belongsTo(models.OrderStatus, { as: 'status' });
  };
  return Order;
};
