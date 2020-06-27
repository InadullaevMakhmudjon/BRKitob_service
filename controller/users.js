import models from '../models';

const include = [
  {
    model: models.UserPoint,
    as: 'point',
  },
  {
    model: models.Gift,
    as: 'gifts',
    through: { attributes: [] },
  },
  {
    model: models.Order,
    as: 'orders',
    include: [
      {
        model: models.OrderStatus,
        as: 'status',
      },
    ],
  },
];

export default {
  async getAll(req, res) {
    try {
      const users = await models.User.findAll({
        attributes: { exclude: ['pointId'] },
        include,
      });
      res.status(200).json(users);
    } catch (e) {
      res.status(502).json({ error: e });
    }
  },
  async get(req, res) {
    const user = await models.User.findByPk(req.params.id, { include });
    if (user) res.status(200).json(user);
    else res.sendStatus(204);
  },
  async create(req, res) {
    try {
      const user = await models.User.create(req.user, {
        include: [{
          association: models.User.associations.point,
          as: 'point',
        }],
      });
      res.status(201).json(user);
    } catch (e) {
      res.status(502).json({ error: e });
    }
  },
  async delete(req, res) {
    models.User.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(502).json(err));
  },
};
