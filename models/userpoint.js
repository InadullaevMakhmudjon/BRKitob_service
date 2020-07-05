module.exports = (sequelize, DataTypes) => {
  const UserPoint = sequelize.define('UserPoint', {
    value: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
  }, {});
  UserPoint.associate = () => {};
  return UserPoint;
};
