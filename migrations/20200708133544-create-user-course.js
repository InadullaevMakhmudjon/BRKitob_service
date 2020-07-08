module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserCourses', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    courseId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Courses',
        key: 'id',
      },
    },
    paymentId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Payments',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now'),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('UserCourses'),
};
