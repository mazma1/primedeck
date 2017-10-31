
import models from '../models';

/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
export default {
  getAllCourses(req, res) {
    return models.Subject.findAll({
      attributes: [
        'id', 'name'
      ]
    }).then((courses) => {
      res.status(200).send({
        courses
      });
    }).catch(error => res.status(500).send(error.message));
  }
};
