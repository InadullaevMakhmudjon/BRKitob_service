import Joi from 'joi';
import models from '../../models';
import isExists from '../check';

const checkBookExists = (ids) => new Promise((res, rej) => {
  Promise.all(ids.map((id) => isExists(models.Book, id)))
    .then((results) => {
      if (results.includes(false)) rej({ message: 'Book is not exists' });
      else res();
    }).catch(rej);
});

const checkUserExists = (id) => new Promise((res, rej) => {
  isExists(models.User, id).then((v) => { if (v) res(); else rej({ message: 'User is not exists' }); })
    .catch(rej);
});

const schema = Joi.object().keys({
  userId: Joi.number().required(),
  typeId: Joi.number().required(),
  method: Joi.number().required(),
  products: Joi.array().items({
    bookId: Joi.number().required(),
    quantity: Joi.number().required(),
  }).required(),
});

export default async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema);
    if (error) throw error;
    await checkUserExists(req.body.userId);
    await checkBookExists(req.body.products.map(({ bookId }) => bookId));

    req.order = {
      userId: req.body.userId,
      typeId: req.body.typeId,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      method: req.body.method,
      products: req.body.products,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
