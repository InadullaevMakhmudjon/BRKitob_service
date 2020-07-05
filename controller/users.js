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
  async updatePoint(req, res) {
    try {
      const user = await models.User.findByPk(req.params.id);
      await models.UserPoint.update(req.body, { where: { id: user.pointId } });
      res.sendStatus(200);
    } catch (error) {
      res.status(502).json({ error });
    }
  },
  async delete(req, res) {
    models.User.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(502).json(err));
  },
  // eslint-disable-next-line consistent-return
  async getGift(req, res) {
    try {
      const user = await models.User.findByPk(req.params.id);
      const gift = await models.Gift.findByPk(req.body.giftId);
      const point = await user.getPoint();
      if (point.value - gift.point < 0) return res.status(400).json({ message: 'Bonuslaringiz yetmaydi' });
      await point.increment({ value: -1 * gift.point });
      await models.UserGift.create({ userId: user.id, giftId: gift.id });
      res.status(200).json(await user.getPoint());
    } catch (error) {
      res.status(502).json(error);
    }
  },
};
