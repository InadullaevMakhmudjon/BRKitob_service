import Joi from 'joi';

const schema = Joi.object().keys({
  title_kr: Joi.string().required(),
  title_lat: Joi.string().required(),
  description_kr: Joi.string().required(),
  description_lat: Joi.string().required(),
  image: Joi.string().uri().required(),
  bonus: Joi.number().required(),
  deadline: Joi.date().optional(),
});

export default async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema);
    if (error) throw error;

    req.gift = {
      title_kr: req.body.title_kr,
      title_lat: req.body.title_lat,
      description_kr: req.body.description_kr,
      description_lat: req.body.description_lat,
      image: req.body.image,
      bonus: req.body.bonus,
      deadline: req.body.deadline,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
