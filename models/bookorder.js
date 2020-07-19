module.exports = (sequelize, DataTypes) => {
  const BookOrder = sequelize.define('BookOrder', {
    bookId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  BookOrder.associate = (models) => {
    BookOrder.belongsTo(models.Book, { as: 'book' });
  };
  return BookOrder;
};
