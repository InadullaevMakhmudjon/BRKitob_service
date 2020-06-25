import users from './users';
import books from './books';
import gifts from './gifts';
import orders from './orders';

export default (app) => {
  app.use('/users', users);
  app.use('/books', books);
  app.use('/gifts', gifts);
  app.use('/orders', orders);
};
