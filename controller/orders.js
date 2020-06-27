import models from '../models';

const find = (where, single) => new Promise((res, rej) => {
  models.Order[single ? 'findOne' : 'findAll']({
    where,
    attributes: { exclude: ['statusId'] },
    include: [
      {
        model: models.OrderStatus,
        as: 'status',
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

const update = (statusId, id) => models.Order.update({ statusId }, { where: { id } });

export default {
  async getAll(req, res) {
    try {
      const orders = await find(null, 0);
      res.status(200).json(orders);
    } catch (error) {
      res.status(502).json(error);
    }
  },
  async get(req, res) {
    try {
      const order = await find({ id: req.params.id }, 1);
      res.status(200).json(order);
    } catch (error) {
      res.status(502).json(error);
    }
  },
  async create(req, res) {
    try {
      const calculate = ({ id, price }) => {
        const { quantity } = req.order.products.find(({ bookId }) => bookId == id) || {};
        return price * +quantity;
      };
      const books = await models.Book.findAll({
        where: { id: req.order.products.map(({ bookId }) => bookId) },
        attributes: ['id', 'price'],
        raw: true,
      });
      const price = books.reduce((a, b) => a + calculate(b), 0);
      await models.Order.create({ ...req.order, price, statusId: 1 }, {
        include: [{
          association: models.Order.associations.products,
          as: 'products',
        }],
      });
      res.sendStatus(201);
    } catch (error) {
      res.status(502).json(error);
    }
  },
  async waiting(req, res) {
    update(2, req.params.id)
      .then(() => res.sendStatus(204))
      .catch((e) => res.status(502).json(e));
  },
  done(req, res) {
    update(3, req.params.id)
      .then(() => res.sendStatus(204))
      .catch((e) => res.status(502).json(e));
  },
};
