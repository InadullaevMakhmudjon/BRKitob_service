import models from '../models';
import hook from '../utils/hook';

const include = [
  {
    model: models.Image,
    as: 'images',
    attributes: { exclude: ['bookId', 'BookId', 'id'] },
  },
  {
    model: models.DeliveryType,
    as: 'deliveryType',
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
];

const find = (where, single) => new Promise((res, rej) => {
  models.Book[single ? 'findOne' : 'findAll']({ where, include })
    .then(res).catch(rej);
});

export default {
  async getAll(req, res) {
    try {
      const { title_kr, title_lat } = req.query;
      const books = await find(req.query, title_kr || title_lat);
      res.status(200).json(books);
    } catch (e) {
      res.status(502).json(e);
    }
  },
  get(req, res) {
    models.Book.findByPk(req.params.id, { include })
      .then((book) => res.status(200).json(book))
      .catch((error) => res.status(502).json(error));
  },
  async create(req, res) {
    try {
      await models.Book.create(req.book, {
        include: [{
          association: models.Book.associations.images,
          as: 'images',
        }],
      });
      res.sendStatus(201);
      hook();
    } catch (error) {
      console.log(error);
      res.status(502).json(error);
    }
  },
  async update(req, res) {
    try {
      const book = {};
      Object.keys(req.book).forEach((key) => {
        if (req.book[key]) { book[key] = req.book[key]; }
      });
      await models.Book.update(req.book, { where: { id: req.params.id } });
      if (book.images) {
        await models.Image.destroy({ where: { bookId: req.params.id } });
        await models.Image.bulkCreate(book.images.map(({ url }) => ({ url, bookId: req.params.id })));
      }
      res.sendStatus(200);
    } catch (error) {
      res.status(502).json(error);
    }
  },
  appendImage(req, res) {
    models.Image.create(req.bookImage)
      .then(() => { res.sendStatus(201); })
      .catch((error) => res.status(502).json(error));
  },
};
