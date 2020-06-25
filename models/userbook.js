
module.exports = (sequelize, DataTypes) => {
  const UserBook = sequelize.define('UserBook', {
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  UserBook.associate = () => {};
  return UserBook;
};
