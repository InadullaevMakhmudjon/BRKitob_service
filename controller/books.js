import models from '../models';
import hook from '../utils/hook';

export default {
  async getAll(req, res) {
    try {
      const users = await models.Book.findAll();
      res.status(200).json(users);
    } catch (e) {
      res.status(502).json(e);
    }
  },
  async getByTitle(req, res) {
    try {
      const { title } = req.query;
      const { language } = req.params;
      if (language && title) {
        const book = await models.Book.findOne({
          where: { [`title_${language}`]: title },
          include: [{
            model: models.Image,
            as: 'images',
            attributes: { exclude: ['bookId', 'BookId'] },
          }],
        });
        res.status(200).json(book);
      }
    } catch (e) {
      res.status(502).json(e);
    }
  },
  create(req, res) {
    models.Book.create(req.book)
      .then(() => { res.sendStatus(201); hook(); })
      .catch((error) => res.status(502).json(error));
  },
  appendImage(req, res) {
    models.Image.create(req.bookImage)
      .then(() => { res.sendStatus(201); })
      .catch((error) => res.status(502).json(error));
  },
};
