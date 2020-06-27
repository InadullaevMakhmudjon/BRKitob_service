const books = require('../data/books');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Books', books, {}),

  down: (queryInterface) => queryInterface.buildDelete('Books', null, false),
};
