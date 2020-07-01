module.exports = (sequelize, DataTypes) => {
  const DeliveryType = sequelize.define('DeliveryType', {
    type_kr: DataTypes.STRING,
    type_lat: DataTypes.STRING,
    price: DataTypes.INTEGER,
  }, {});
  DeliveryType.associate = (models) => {
    DeliveryType.hasMany(models.Book, { as: 'books', foreignKey: 'deliveryTypeId' });
    DeliveryType.hasMany(models.Gift, { as: 'gifts', foreignKey: 'deliveryTypeId' });
  };
  return DeliveryType;
};
