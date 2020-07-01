
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    paymentId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Payments',
        key: 'id',
      },
    },
    typeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'OrderTypes',
        key: 'id',
      },
    },
    statusId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'OrderStatuses',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Orders'),
};
