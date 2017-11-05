
import models from '../models';

/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
export default {
  getAllCourses(req, res) {
    return models.Course.findAll({
      attributes: [
        'id', 'name', 'code', 'description'
      ]
    }).then((courses) => {
      res.status(200).send({
        courses
      });
    }).catch(error => res.status(500).send(error.message));
  }
};
