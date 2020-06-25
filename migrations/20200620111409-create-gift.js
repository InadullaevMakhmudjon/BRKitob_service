module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Gifts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title_kr: {
      type: Sequelize.STRING,
    },
    title_lat: {
      type: Sequelize.STRING,
    },
    description_kr: {
      type: Sequelize.TEXT,
    },
    description_lat: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING,
    },
    point: {
      type: Sequelize.FLOAT,
    },
    deadline: {
      type: Sequelize.DATE,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Gifts'),
};
