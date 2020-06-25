import models from '../models';

export default {
  async getAll(req, res) {
    try {
      const users = await models.User.findAll({
        attributes: { exclude: ['pointId'] },
        include: [{
          model: models.UserPoint,
          as: 'point',
        }],
      });
      res.status(200).json(users);
    } catch (e) {
      res.status(502).json({ error: e });
    }
  },
  async get(req, res) {
    const user = await models.User.findOne({ where: { id: req.params.id } });
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
