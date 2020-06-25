module.exports = (sequelize, DataTypes) => {
  const UserPoint = sequelize.define('UserPoint', {
    value: DataTypes.INTEGER,
  }, {});
  UserPoint.associate = () => {};
  return UserPoint;
};
