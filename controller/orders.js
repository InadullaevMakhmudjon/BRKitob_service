import models from '../models';

const find = (where, single) => new Promise((res, rej) => {
  models.Order[single ? 'findOne' : 'findAll']({ where })
    .then(res).catch(rej);
});

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
};
