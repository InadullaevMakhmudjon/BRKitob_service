import Joi from 'joi';

const schema = Joi.object().keys({
  title_kr: Joi.string().required(),
  title_lat: Joi.string().required(),
  description_kr: Joi.string().required(),
  description_lat: Joi.string().required(),
  price: Joi.number().required(),
  point: Joi.number().integer(),
});

const imageSchema = Joi.object().keys({
  bookId: Joi.number().required(),
  url: Joi.string().required(),
});

export const validateImage = async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, imageSchema);
    if (error) throw error;

    req.bookImage = {
      bookId: req.body.bookId,
      url: req.body.url,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};

export const validationBook = async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema);
    if (error) throw error;

    req.book = {
      title_kr: req.body.title_kr,
      title_lat: req.body.title_lat,
      description_kr: req.body.description_kr,
      description_lat: req.body.description_lat,
      price: req.body.price,
      point: req.body.point,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
