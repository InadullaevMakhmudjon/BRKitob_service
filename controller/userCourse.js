import models from '../models';
import { getPayment } from './orders';

const { UserCourse } = models;

const createUserCourse = (userCourse, payment) => UserCourse.create({
  ...userCourse, payment,
}, {
  include: [
    {
      association: UserCourse.associations.payment,
      as: 'payment',
    },
  ],
});

// Create method
const createMethod = async ({ courseId, userId, type }, { chargerId }) => {
  const { price } = await models.Course.findByPk(courseId);
  const { phone } = await models.User.findByPk(userId);
  const payment = await getPayment(type, price, phone, chargerId);
  const result = await createUserCourse({ courseId, userId, type }, price, payment);
  return result.payment;
};

export default {
  create(req, res) {
    createMethod(req.userCourse, req.params)
      .then((data) => res.status(201).json(data))
      .catch((error) => res.status(502).json(error));
  },
};
