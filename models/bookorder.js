
module.exports = (sequelize, DataTypes) => {
  const BookOrder = sequelize.define('BookOrder', {
    bookId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
  }, {});
  BookOrder.associate = () => {};
  return BookOrder;
};
