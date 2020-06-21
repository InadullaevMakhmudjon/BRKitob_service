
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    is_bot: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    language_code: DataTypes.STRING,
    createdAt: DataTypes.DATE,
  }, {});
  User.associate = () => {};
  return User;
};
