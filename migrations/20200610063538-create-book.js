module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title_kr: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(160),
    },
    title_lat: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(160),
    },
    description_kr: {
      type: Sequelize.TEXT,
    },
    description_lat: {
      type: Sequelize.TEXT,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    point: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Books'),
};
