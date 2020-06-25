
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserPoints', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    value: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('UserPoints'),
};
