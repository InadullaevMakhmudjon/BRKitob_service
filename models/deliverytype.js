module.exports = (sequelize, DataTypes) => {
  const DeliveryType = sequelize.define('DeliveryType', {
    type_kr: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    type_lat: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
  }, {});
  DeliveryType.associate = (models) => {
    DeliveryType.hasMany(models.Book, { as: 'books', foreignKey: 'deliveryTypeId' });
    DeliveryType.hasMany(models.Gift, { as: 'gifts', foreignKey: 'deliveryTypeId' });
  };
  return DeliveryType;
};
