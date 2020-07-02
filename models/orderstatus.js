module.exports = (sequelize, DataTypes) => {
  const OrderStatus = sequelize.define('OrderStatus', {
    name_kr: DataTypes.STRING,
    name_lat: DataTypes.STRING,
  }, {});
  OrderStatus.associate = () => {};
  return OrderStatus;
};
