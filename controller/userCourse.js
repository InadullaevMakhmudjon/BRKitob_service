import models from '../models';
import { getPayment } from './orders';

const { UserCourse } = models;

const createUserCourse = (userCourse, payment) => UserCourse.create({
  ...userCourse, payment,
}, {
  include: [models.Payment],
});

// Create method
const createMethod = async ({ courseId, userId, type }, { chargerId }) => {
  const { price } = await models.Course.findByPk(courseId);
  const { phone_number } = await models.User.findByPk(userId);
  const payment = await getPayment(type, price, phone_number, chargerId);
  await createUserCourse({
    courseId, userId, type, payment,
  });
  return payment;
};

export default {
  create(req, res) {
    createMethod(req.userCourse, req.params)
      .then((data) => res.status(201).json(data))
      .catch((error) => res.status(502).json(error));
  },
};
