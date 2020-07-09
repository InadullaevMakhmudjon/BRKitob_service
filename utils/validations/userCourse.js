import Joi from 'joi';
import models from '../../models';
import isExists from '../check';

const checkUserExists = (id) => new Promise((res, rej) => {
  isExists(models.Course, id).then((v) => { if (v) res(); else rej({ message: 'Course is not exists' }); })
    .catch(rej);
});

const schema = Joi.object().keys({
  userId: Joi.number().required(),
  courseId: Joi.number().required(),
  type: Joi.number().required(),
});

export default async (req, res, next) => {
  try {
    const { error } = Joi.validate(req.body, schema);
    if (error) throw error;
    await checkUserExists(req.body.courseId);

    req.userCourse = {
      userId: req.body.userId,
      courseId: req.body.courseId,
      type: req.body.type,
    };
    next();
  } catch (error) { res.status(403).json(error); }
};
