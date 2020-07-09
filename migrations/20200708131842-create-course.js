module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Courses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title_kr: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    title_lat: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description_kr: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description_lat: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Courses'),
};
