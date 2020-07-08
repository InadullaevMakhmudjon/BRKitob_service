import users from './users';
import books from './books';
import courses from './courses';
import gifts from './gifts';
import orders from './orders';
import deliveryTypes from './deliveryTypes';
import bot from './bot';

export default (app) => {
  app.use('/users', users);
  app.use('/books', books);
  app.use('/courses', courses);
  app.use('/gifts', gifts);
  app.use('/orders', orders);
  app.use('/deliveryTypes', deliveryTypes);
  app.use('/bot', bot);
};
