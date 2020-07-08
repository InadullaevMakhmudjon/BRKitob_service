import models from '../models';
import Payme from '../services/payme';

const PAYME_BASE_URL = process.env.PAYME_URL;

const getMessage = (point) => `You have earned ${point} points additionally. Now you can check gifts`;

const find = (where, single) => models.Order[single ? 'findOne' : 'findAll']({
  where,
  attributes: { exclude: ['statusId', 'typeId', 'paymentId', 'userId'] },
  include: [
    {
      model: models.User,
      as: 'user',
      attributes: { exclude: ['pointId'] },
      include: [
        {
          model: models.UserPoint,
          as: 'point',
        },
      ],
    },
    {
      model: models.OrderStatus,
      as: 'status',
    },
    {
      model: models.Payment,
      as: 'payment',
      include: [
        {
          model: models.PaymentState,
          as: 'state',
        },
        {
          model: models.PaymentType,
          as: 'type',
        },
      ],
      attributes: { exclude: ['stateId', 'typeId'] },
    },
    {
      model: models.OrderType,
      as: 'type',
    },
    {
      model: models.BookOrder,
      as: 'products',
      include: [{
        model: models.Book,
        as: 'book',
        include: [
          {
            model: models.Image,
            as: 'images',
          },
        ],
      }],
      attributes: { exclude: ['orderId', 'OrderId', 'bookId'] },
    },
  ],
});

// Creates order
const createOrder = (order, price, payment) => models.Order.create({
  ...order, price, statusId: 1, payment,
}, {
  include: [
    {
      association: models.Order.associations.products,
      as: 'products',
    },
    {
      association: models.Order.associations.payment,
      as: 'payment',
    },
  ],
});

// Creates Payment instance on Payme and and returns it
const createPaymentPayme = (price, phone_number) => new Promise((resolve) => {
  Payme.create(price)
    .then(({ result: { receipt: { _id: id, account } } }) => {
      // no need to waid payment message sent
      Payme.send(id, phone_number);
      resolve({
        typeId: 2,
        stateId: 1,
        transaction: account[1].value,
        price,
        url: `${PAYME_BASE_URL}/${id}`,
      });
    });
});

const getPaymentTelegram = (price, id) => new Promise((resolve) => {
  Payme.get(id)
    .then(({ result: { receipt: { _id: paymeId, account } } }) => {
      resolve({
        typeId: 1,
        stateId: 5,
        transaction: account[1].value,
        price,
        url: `${PAYME_BASE_URL}/${paymeId}`,
      });
    });
});

// Adds point to the user and returns that user's `phone number`
const addPoints = async (userId, points) => {
  const user = await models.User.findByPk(userId);
  const point = await user.getPoint();
  await point.increment({ value: points });
  return user.phone_number.substr(1);
};

// Calculates total price from given bookIds and returns respect `books` with `total price`
const getPrice = async (products) => {
  const calculate = ({ id, price }) => {
    const { quantity } = products.find(({ bookId }) => bookId == id) || {};
    return price * +quantity;
  };
  const books = await models.Book.findAll({
    where: { id: products.map(({ bookId }) => bookId) },
    attributes: ['id', 'price', 'point'],
    raw: true,
  });
  const point = books.map(({ point }) => point).reduce((acc, cur) => acc + cur);
  const price = books.reduce((a, b) => a + calculate(b), 0);
  return { price, point };
};

// Creates payment and returns that `payment` object
// eslint-disable-next-line max-len
const getPayment = (method, price, phone, chargerId) => (
  method === 1 ? getPaymentTelegram(price, chargerId) : createPaymentPayme(price, phone)
);

// Checks payme stateus
const checkPayme = ({ url }) => {
  const id = url.split('/').reverse()[0];
  return Payme.check(id);
};

// Gets order by updating payment status
const getOrder = async (id) => {
  const order = await models.Order.findByPk(id);
  const payment = await order.getPayment();
  if ((payment.typeId === 2) && payment.url) {
    const { result } = await checkPayme(payment);
    await payment.update({ stateId: result.state + 1 });
  }
  const result = await find({ id }, 1);
  return result;
};

// Create method
const createMethod = async (order, { chargerId }) => {
  const { price: totalPrice, point } = await getPrice(order.products);
  const price = totalPrice + (order.typeId === 2 && 15000); // 15 000 for delivery price
  const phone = await addPoints(order.userId, point);
  const payment = await getPayment(order.method, price, phone, chargerId);
  const result = await createOrder(order, price, payment);
  return chargerId ? { message: getMessage(point) } : result.payment;
};

// Updates Order
const update = (statusId, id) => models.Order.update({ statusId }, { where: { id } });

export default {
  getAll(req, res) {
    find(null, 0)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(502).json(error));
  },
  get(req, res) {
    getOrder(req.params.id)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(502).json(error));
  },
  create(req, res) {
    createMethod(req.order, req.params)
      .then((data) => res.status(201).json(data))
      .catch((error) => res.status(502).json(error));
  },
  waiting(req, res) {
    update(2, req.params.id)
      .then(() => res.sendStatus(204))
      .catch((error) => res.status(502).json(error));
  },
  done(req, res) {
    update(3, req.params.id)
      .then(() => res.sendStatus(204))
      .catch((error) => res.status(502).json(error));
  },
};
