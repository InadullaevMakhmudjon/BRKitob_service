module.exports = (sequelize, DataTypes) => {
  const Gift = sequelize.define('Gift', {
    title_kr: DataTypes.STRING,
    title_lat: DataTypes.STRING,
    description_kr: DataTypes.STRING,
    description_lat: DataTypes.STRING,
    image: DataTypes.STRING,
    point: DataTypes.FLOAT,
    deliveryTypeId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    deadline: DataTypes.DATE,
  }, {});
  Gift.associate = (models) => {
    Gift.belongsTo(models.DeliveryType, { as: 'deliveryType', foreignKey: 'deliveryTypeId' });
    Gift.belongsToMany(models.User, {
      as: 'users',
      through: models.UserGift,
      foreignKey: 'giftId',
    });
  };
  return Gift;
};
