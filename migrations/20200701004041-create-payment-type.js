module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('PaymentTypes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name_uz: {
      type: Sequelize.STRING,
    },
    name_lat: {
      type: Sequelize.STRING,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('PaymentTypes'),
};
