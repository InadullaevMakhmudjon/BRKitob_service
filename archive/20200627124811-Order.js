const bookOrders = require('../data/bookOrder');
const books = require('../data/books');

const calcPrice = (orderId) => bookOrders
  .filter((bOrder) => bOrder.orderId === orderId)
  .map((order) => (Object.assign(order, books.find(({ id }) => id === order.bookId))))
  .reduce((acc, cur) => acc.quantity * acc.price + cur.price * cur.quantity);

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Orders', [
    {
      id: 1,
      userId: 190738104,
      statusId: 1,
      price: calcPrice(1),
      createdAt: new Date(2020, 5, 15),
    },
    {
      id: 2,
      userId: 190738104,
      statusId: 2,
      price: calcPrice(2),
      createdAt: new Date(2020, 5, 21),
    },
    {
      id: 3,
      userId: 373691688,
      statusId: 1,
      price: calcPrice(3),
      createdAt: new Date(2020, 5, 15),
    },
    {
      id: 4,
      userId: 373691688,
      statusId: 3,
      price: calcPrice(4),
      createdAt: new Date(2020, 5, 21),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Orders', null, false),
};
