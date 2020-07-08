import Joi from 'joi';

const schema = (key) => Joi.object().keys({
  title_kr: Joi.string()[key](),
  title_lat: Joi.string()[key](),
  description_kr: Joi.string()[key](),
  description_lat: Joi.string()[key](),
  price: Joi.number()[key](),
  image: Joi.string()[key](),
});

export const update = (req, res, next) => { req.schemaKey = 'optional'; next(); };
export const create = (req, res, next) => { req.schemaKey = 'required'; next(); };

export default async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema(req.schemaKey));
    if (error) throw error;

    req.course = {
      title_kr: req.body.title_kr,
      title_lat: req.body.title_lat,
      description_kr: req.body.description_kr,
      description_lat: req.body.description_lat,
      price: req.body.price,
      image: req.body.image,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
