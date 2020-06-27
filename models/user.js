module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    is_bot: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    language_code: DataTypes.STRING,
    pointId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  User.associate = (models) => {
    User.belongsTo(models.UserPoint, { as: 'point' });
    User.hasMany(models.Order, { as: 'orders', foreignKey: 'userId' });
    User.belongsToMany(models.Gift, {
      as: 'gifts',
      through: models.UserGift,
      foreignKey: 'userId',
    });
  };
  return User;
};
