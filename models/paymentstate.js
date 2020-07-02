
module.exports = (sequelize, DataTypes) => {
  const PaymentState = sequelize.define('PaymentState', {
    name: DataTypes.STRING,
  }, {});
  PaymentState.associate = () => {};
  return PaymentState;
};
