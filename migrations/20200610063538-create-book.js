
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
      type: Sequelize.STRING(250),
    },
    title_ru: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(250),
    },
    description_kr: {
      type: Sequelize.STRING,
    },
    description_ru: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Books'),
};
