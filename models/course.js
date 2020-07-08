module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title_kr: DataTypes.STRING,
    title_lat: DataTypes.STRING,
    description_kr: DataTypes.TEXT,
    description_lat: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
  }, {});
  Course.associate = (models) => {
    Course.belongsToMany(models.User, {
      as: 'users',
      through: models.UserCourse,
      foreignKey: 'courseId',
    });
  };
  return Course;
};
