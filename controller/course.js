import models from '../models';
import hook from '../utils/hook';

const { Course } = models;

const include = [
  {
    model: models.User,
    as: 'users',
    through: { attributes: [] },
  },
];

const find = (where, single) => new Promise((res, rej) => {
  Course[single ? 'findOne' : 'findAll']({ where })
    .then(res).catch(rej);
});

export default {
  async getAll(req, res) {
    try {
      const { title_kr, title_lat } = req.query;
      const courses = await find(req.query, title_kr || title_lat);
      res.status(200).json(courses);
    } catch (e) {
      res.status(502).json(e);
    }
  },
  get(req, res) {
    models.Course.findByPk(req.params.id, { include })
      .then((course) => res.status(200).json(course))
      .catch((error) => res.status(502).json(error));
  },
  async create(req, res) {
    try {
      await Course.create(req.course);
      res.sendStatus(201);
      hook();
    } catch (error) {
      res.status(502).json(error);
    }
  },
  async update(req, res) {
    try {
      const course = {};
      Object.keys(req.course).forEach((key) => {
        if (req.course[key]) { course[key] = req.course[key]; }
      });
      await models.Course.update(req.course, { where: { id: req.params.id } });
      res.sendStatus(200);
    } catch (error) {
      res.status(502).json(error);
    }
  },
};
