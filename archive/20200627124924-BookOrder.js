const bookOrders = require('../data/bookOrder');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Orders', bookOrders, {}),

  down: (queryInterface) => queryInterface.bulkDelete('Orders', null, false),
};
