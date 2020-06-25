module.exports = (sequelize, DataTypes) => {
  const Gift = sequelize.define('Gift', {
    title_kr: DataTypes.STRING,
    title_lat: DataTypes.STRING,
    description_kr: DataTypes.STRING,
    description_lat: DataTypes.STRING,
    image: DataTypes.STRING,
    point: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    deadline: DataTypes.DATE,
  }, {});
  Gift.associate = () => {};
  return Gift;
};
