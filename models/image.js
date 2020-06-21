
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    bookId: DataTypes.INTEGER,
    url: DataTypes.STRING,
  }, {});
  Image.associate = () => {};
  return Image;
};
