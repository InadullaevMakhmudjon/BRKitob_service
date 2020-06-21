import Joi from 'joi';

const schema = Joi.object().keys({
  title_kr: Joi.string().required(),
  title_ru: Joi.string().required(),
  description_kr: Joi.string().required(),
  description_ru: Joi.string().required(),
  image: Joi.string().required(),
  bonus: Joi.number().required(),
  deadline: Joi.date().optional(),
});

export default async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema);
    if (error) throw error;

    req.gift = {
      title_kr: req.body.title_kr,
      title_ru: req.body.title_ru,
      description_kr: req.body.description_kr,
      description_ru: req.body.description_ru,
      image: req.body.image,
      bonus: req.body.bonus,
      deadline: req.body.deadline,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
