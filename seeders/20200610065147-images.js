
require('dotenv').config();

const baseUrl = process.env.BASE_URL;
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Images', [
    {
      bookId: 1,
      url: 'https://daisy.org/wp-content/uploads/2018/11/book-dark-enlightenment-1029141-1024x683.jpg',
    },
    {
      bookId: 1,
      url: 'https://daisy.org/wp-content/uploads/2018/11/book-dark-enlightenment-1029141-1024x683.jpg',
    },
    {
      bookId: 1,
      url: 'https://daisy.org/wp-content/uploads/2018/11/book-dark-enlightenment-1029141-1024x683.jpg',
    },
    {
      bookId: 2,
      url: 'https://img.freepik.com/free-photo/front-view-pile-books-with-copy-space_23-2148255858.jpg?size=626&ext=jpg',
    },
    {
      bookId: 2,
      url: 'https://img.freepik.com/free-photo/front-view-pile-books-with-copy-space_23-2148255858.jpg?size=626&ext=jpg',
    },
    {
      bookId: 2,
      url: 'https://img.freepik.com/free-photo/front-view-pile-books-with-copy-space_23-2148255858.jpg?size=626&ext=jpg',
    },
    {
      bookId: 3,
      url: 'https://assets.entrepreneur.com/content/3x2/2000/20190102161219-GettyImages-904000456.jpeg',
    },
    {
      bookId: 3,
      url: 'https://assets.entrepreneur.com/content/3x2/2000/20190102161219-GettyImages-904000456.jpeg',
    },
    {
      bookId: 3,
      url: 'https://assets.entrepreneur.com/content/3x2/2000/20190102161219-GettyImages-904000456.jpeg',
    },
  ], {}),

  down: (queryInterface) => queryInterface.buildDelete('Images', null, false),
};
