module.exports = (sequelize, DataTypes) => {
  const UserGift = sequelize.define('UserGift', {
    giftId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  UserGift.associate = () => {};
  return UserGift;
};
