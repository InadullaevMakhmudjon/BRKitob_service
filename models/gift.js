
module.exports = (sequelize, DataTypes) => {
  const Gift = sequelize.define('Gift', {
    title_kr: DataTypes.STRING,
    title_ru: DataTypes.STRING,
    description_kr: DataTypes.STRING,
    description_ru: DataTypes.STRING,
    image: DataTypes.STRING,
    bonus: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    deadline: DataTypes.DATE,
  }, {});
  Gift.associate = () => {};
  return Gift;
};
