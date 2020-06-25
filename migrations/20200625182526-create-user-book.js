
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserBooks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    bookId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      referances: {
        model: 'Books',
        key: 'id',
      },
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      referances: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('UserBooks'),
};
