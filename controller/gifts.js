import models from '../models';
import hook from '../utils/hook';

const find = (where, single) => new Promise((res, rej) => {
  models.Gift[single ? 'findOne' : 'findAll']({ where })
    .then(res).catch(rej);
});

export default {
  async getAll(req, res) {
    try {
      const { title_kr, title_lat } = req.query;
      const gifts = await find(req.query, title_kr || title_lat);
      res.status(200).json(gifts);
    } catch (e) {
      res.status(502).json(e);
    }
  },
  get(req, res) {
    models.Gift.findByPk(req.params.id)
      .then((gift) => res.status(200).json(gift))
      .catch((error) => res.status(502).json(error));
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
