
module.exports = (sequelize, DataTypes) => {
  const PaymentType = sequelize.define('PaymentType', {
    name_uz: DataTypes.STRING,
    name_lat: DataTypes.STRING,
  }, {});
  PaymentType.associate = () => {};
  return PaymentType;
};
