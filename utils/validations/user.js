import Joi from 'joi';
import models from '../../models';
import isExist from '../check';

const schema = Joi.object().keys({
  id: Joi.number().required(),
  is_bot: Joi.boolean().required(),
  first_name: Joi.string().optional(),
  last_name: Joi.string().optional(),
  username: Joi.string().optional(),
  contact: Joi.string().required(),
  language_code: Joi.string().optional(),
});

export default async (req, res, next) => {
  try {
    let { error } = Joi.validate(req.body, schema);
    const exists = error ? null : await isExist(models.User, req.body.id);
    if (exists) error = { isJoi: false, message: 'User is exists' };
    if (error) throw error;

    req.user = {
      id: req.body.id,
      is_bot: req.body.is_bot,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      contact: req.body.contact,
      point: { value: 0 },
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
