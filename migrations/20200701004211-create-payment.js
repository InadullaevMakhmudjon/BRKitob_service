module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Payments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    typeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PaymentTypes',
        key: 'id',
      },
    },
    stateId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'PaymentStates',
        key: 'id',
      },
    },
    descrption: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    transaction: Sequelize.INTEGER,
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    url: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Payments'),
};
