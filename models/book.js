module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title_kr: DataTypes.STRING,
    title_lat: DataTypes.STRING,
    description_kr: DataTypes.STRING,
    description_lat: DataTypes.STRING,
    price: DataTypes.FLOAT,
    point: DataTypes.INTEGER,
    deliveryTypeId: DataTypes.INTEGER,
  }, {});
  Book.associate = (models) => {
    Book.hasMany(models.Image, { as: 'images' });
    Book.belongsTo(models.DeliveryType, { as: 'deliveryType', foreignKey: 'deliveryTypeId' });
  };
  return Book;
};
