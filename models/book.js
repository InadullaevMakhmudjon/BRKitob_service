
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title_kr: DataTypes.STRING,
    title_ru: DataTypes.STRING,
    description_kr: DataTypes.STRING,
    description_ru: DataTypes.STRING,
    price: DataTypes.FLOAT,
  }, {});
  Book.associate = (models) => {
    Book.hasMany(models.Image, { as: 'images' });
  };
  return Book;
};
