
module.exports = (sequelize, DataTypes) => {
  const OrderType = sequelize.define('OrderType', {
    name: DataTypes.STRING,
  }, {});
  OrderType.associate = () => {};
  return OrderType;
};
