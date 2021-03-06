import Joi from 'joi';
import models from '../../models';
import isExist from '../check';

const schema = Joi.object().keys({
  userId: Joi.number().required(),
  text: Joi.string().required()
});

export default async (req, res, next) => {
  try {
    let { error } = Joi.validate(req.body, schema);
    const exists = error ? null : await isExist(models.User, req.body.userId);
    if (!exists) error = { isJoi: false, message: 'User is not exists' };
    if (error) throw error;
    next();
  } catch (error) { res.status(403).json(error); }
};
