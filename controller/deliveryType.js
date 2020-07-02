import models from '../models';

export default {
  getAll(_, res) {
    models.DeliveryType.findAll()
      .then((types) => res.status(200).json(types))
      .catch((error) => res.status(502).json(error));
  },
  update(req, res) {
    models.DeliveryType.update({ price: req.body.price }, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => res.status(502).json(error));
  },
};
