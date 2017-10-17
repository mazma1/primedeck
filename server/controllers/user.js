import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import models from '../models';

/* eslint-disable object-curly-newline */
export default {
  signin(req, res) {
    const errors = {};
    if (!req.body.identifier || !req.body.password) {
      if (!req.body.identifier) {
        errors.identifier = 'Email or Username is required';
      }
      if (!req.body.password) {
        errors.password = 'Password is required';
      }
      res.status(400).send(errors);
    } else {
      models.User.findOne({
        where: {
          $or: [
            { username: req.body.identifier },
            { email: req.body.identifier }
          ]
        },
      }).then((user) => {
        if (!user) {
          errors.identifier = 'Invalid username or password';
          res.status(401).send(errors);
        } else if (user) {
          if (bcrypt.compareSync(req.body.password, user.password)) {
            const { id, firstName, lastName, username, email, type, phoneNumber } = user;
            const token = jwt.sign({
              data: {
                id, firstName, lastName, username, email, type, phoneNumber
              }
            }, process.env.TOKEN_SECRET, { expiresIn: '24h' });
            res.status(200).send({
              token
            });
          } else {
            errors.identifier = 'Invalid username or password';
            res.status(401).send(errors);
          }
        }
      }).catch(err => res.status(500).send(err.message));
    }
  }
};
