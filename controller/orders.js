import models from '../models';
import Payme from '../services/payme';

const PAYME_BASE_URL = process.env.PAYME_URL;

const find = (where, single) => new Promise((res, rej) => {
  models.Order[single ? 'findOne' : 'findAll']({
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
        }],
        attributes: { exclude: ['orderId', 'OrderId', 'bookId'] },
      },
    ],
  })
    .then(res).catch(rej);
});

// Creates order
const createOrder = (order, price, payment) => new Promise((resolve) => {
  models.Order.create({
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
  }).then(resolve);
});

// Creates Payment instance on Payme and and returns it
const createPayment = (price, phone_number) => new Promise((resolve) => {
  Payme.create(price, phone_number)
    .then(({ result: { receipt: { _id: id } } }) => {
      resolve({
        typeId: 2,
        stateId: 1,
        price,
        url: `${PAYME_BASE_URL}/${id}`,
      });
    });
});

// Adds point to the user and returns that user's `phone number`
const addPoints = async (userId, books) => {
  const user = await models.User.findByPk(userId);
  user.update({
    point: user.point + books.map(({ point }) => point).reduce((acc, cur) => acc + cur),
  });
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
  const price = books.reduce((a, b) => a + calculate(b), 0);
  return { price, books };
};

// Creates payment and returns that `payment` object
const getPayment = (method, price, phone) => new Promise((resolve) => {
  if (method === 1) {
    resolve({ typeId: 1, stateId: 1, price });
  } else {
    createPayment(price, phone).then(resolve);
  }
});

// Checks payme stateus
const checkPayme = ({ url }) => new Promise((res, rej) => {
  const id = url.split('/').reverse()[0];
  Payme.check(id).then(res).catch(rej);
});

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
const createMethod = async (order) => {
  const { price, books } = await getPrice(order.products);
  const phone = await addPoints(order.userId, books);
  const payment = await getPayment(order.method, price, phone);
  const result = await createOrder(order, price, payment);
  return result;
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
    createMethod(req.order)
      .then(({ payment: { url } }) => res.status(201).json({ url }))
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
