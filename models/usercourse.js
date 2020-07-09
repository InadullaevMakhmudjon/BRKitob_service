module.exports = (sequelize, DataTypes) => {
  const UserCourse = sequelize.define('UserCourse', {
    userId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, { timestamps: false });
  UserCourse.associate = (models) => {
    UserCourse.belongsTo(models.Payment);
  };
  return UserCourse;
};
