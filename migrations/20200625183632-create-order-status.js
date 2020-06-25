
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('OrderStatuses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name_kr: {
      type: Sequelize.STRING,
    },
    name_lat: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('OrderStatuses'),
};
