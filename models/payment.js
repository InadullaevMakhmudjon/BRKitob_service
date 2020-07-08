module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    typeId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    descrption: DataTypes.STRING,
    price: DataTypes.INTEGER,
    transaction: DataTypes.INTEGER,
    url: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  Payment.associate = (models) => {
    Payment.belongsTo(models.PaymentState, { as: 'state' });
    Payment.belongsTo(models.PaymentType, { as: 'type' });
  };
  return Payment;
};
