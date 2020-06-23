module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Images', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.STRING,
    },
    bookId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Books',
        key: 'id',
      },
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Images'),
};
