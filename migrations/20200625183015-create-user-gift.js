
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserGifts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    giftId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Gifts',
        key: 'id',
      },
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
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
  down: (queryInterface) => queryInterface.dropTable('UserGifts'),
};
