import models from '../models';
import hook from '../utils/hook';

export default {
  async getAll(req, res) {
    try {
      const gifts = await models.Gift.findAll();
      res.status(200).json(gifts);
    } catch (e) {
      res.status(502).json(e);
    }
  },
  async getByTitle(req, res) {
    try {
      const { title } = req.query;
      const { language } = req.params;
      if (language && title) {
        const gift = await models.Gift.findOne({
          where: { [`title_${language}`]: title },
        });
        res.status(200).json(gift);
      }
    } catch (e) {
      res.status(502).json(e);
    }
  },
  create(req, res) {
    models.Gift.create(req.gift)
      .then(() => { res.sendStatus(201); hook(); })
      .catch((error) => res.status(502).json(error));
  },
  update(req, res) {
    models.Gift.update(req.gift, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => res.status(502).json(error));
  },
};
