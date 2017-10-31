import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import isEmpty from 'lodash/isEmpty';
import sendMail from '../utils/sendEmail';
import validateInput from '../utils/regValidation';
import pagination from '../utils/pagination';
import models from '../models';

const salt = bcrypt.genSaltSync(10);

/* eslint-disable object-curly-newline */
/* eslint-disable consistent-return */
export default {
  /**
   * Handler method for signin route: POST /api/v1/users/signin
   * Authenticates and logs a user in
   *
   * @param {any} req
   * @param {any} res
   */
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
            const { id, firstName, lastName, username, email, role, phoneNumber } = user;
            const token = jwt.sign({
              data: {
                id, firstName, lastName, username, email, role, phoneNumber
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
  },

  /**
   * Registers a new user
   * Route: POST: /api/v1/users/register
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   * @returns {response}
   */
  register(req, res) {
    const { errors, valid } = validateInput(req.body);
    if (!valid) {
      res.status(400).send(errors);
    } else {
      models.User.findOne({
        where: {
          $or: [{ username: req.body.username }, { email: req.body.email }]
        },
      }).then((existingUser, err) => {
        if (existingUser) {
          if (existingUser.username === req.body.username) {
            errors.username = 'User with username already exists';
          }
          if (existingUser.email === req.body.email) {
            errors.email = 'User with email already exists';
          }
          if (!isEmpty(errors)) {
            res.status(409).send(errors);
          }
        } else {
          const { firstName, lastName, email, phoneNumber } = req.body;
          const username = req.body.username.toLowerCase();
          const userRole = req.body.role;
          const userData = {
            firstName,
            lastName,
            username,
            email,
            role: userRole,
            phoneNumber: `234${phoneNumber.slice(1)}`,
            password: bcrypt.hashSync(username, salt)
          };
          models.User.create(userData).then((user) => {
            if (user.role === 'student') {
              const { age, className } = req.body;
              const studentDetails = {
                studentId: user.id,
                age,
                className
              };
              models.Student.create(studentDetails)
                .catch(error => res.status(500).send({ error: error.message }));
              const { subjects } = req.body;
              subjects.map((subject) => {
                models.StudentSubject.create({
                  studentId: user.id,
                  subjectId: subject
                })
                  .catch(error => res.status(500).send({ error: error.message }));
              });
            }
            sendMail(req, user);
            return res.status(201).send({
              message: 'User was successfully registered'
            });
          }).catch(error => res.status(500).send({ error: error.message }));
        }
      }).catch(error => res.status(500).send({ error: error.message }));
    }
  },

  /**
   * Fetches all the users
   * Route: GET: /api/v1/users
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {res} array of all users
   */
  allUsers(req, res) {
    const { role } = req.decoded.data;
    const limit = req.query.limit || 2;
    const offset = req.query.offset || 0;
    if (role === 'student') {
      return res.status(403).send({
        error: 'You do not have permission to view all users'
      });
    }
    return models.User.findAndCountAll({
      attributes: [
        'id', 'firstName', 'lastName', 'username', 'phoneNumber', 'role'
      ],
      limit,
      offset
    }).then((users) => {
      if (users.count > 0) {
        res.status(200).send({
          users: users.rows,
          pagination: pagination(users.count, limit, offset)
        });
      }
    }).catch(error => res.status(500).send(error.message));
  },

  /**
   * Fetches all the users
   * Route: GET: /api/v1/users
   *
   * @param {any} req incoming request from the client
   * @param {any} res response sent back to client
   *
   * @returns {res} array of all users
   */
  allUsersCount(req, res) {
    const { role } = req.decoded.data;
    if (role === 'student') {
      return res.status(403).send({
        error: 'You do not have permission to view all users'
      });
    }
    return models.User.findAll({
      attributes: [
        'id', 'firstName', 'lastName', 'username', 'phoneNumber', 'role'
      ]
    }).then((users) => {
      const admins = [];
      const teachers = [];
      const students = [];
      users.map((user) => {
        if (user.role === 'admin') {
          admins.push(user);
        } else if (user.role === 'teacher') {
          teachers.push(user);
        } else if (user.role === 'student') {
          students.push(user);
        }
      });
      res.status(200).send({
        admins: admins.length,
        teachers: teachers.length,
        students: students.length
      });
    }).catch(error => res.status(500).send(error.message));
  },

  singleUser(req, res) {
    const { id, role } = req.decoded.data;
    models.User.findOne({
      where: { id: req.params.userId },
      attributes: [
        'id', 'firstName', 'lastName', 'username', 'phoneNumber', 'role'
      ]
    }).then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User does not exist' });
      }
      if (role === 'student' && id !== parseInt(req.params.userId, 10)) {
        return res.status(403).send({
          message: 'You don\'t have the permission to view other profiles'
        });
      }
      return res.status(200).send({ user });
    }).catch(error => res.status(500).send(error.message));
  },

  updateUser(req, res) {
    const { id, role } = req.decoded.data;
    if (role !== 'admin' && id !== parseInt(req.params.userId, 10)) {
      return res.status(403).send({
        message: 'You don\'t have the permission to update other profiles'
      });
    }
    if (role === 'student') {
      const { firstName, lastName, email, role } = req.body;
      if (firstName || lastName || email || role) {
        return res.status(403).send({
          message: 'You can only update your username and password as a student'
        });
      }
    }
    if (role === 'teacher') {
      const { role } = req.body;
      if (role) {
        return res.status(403).send({
          message: 'You don\'t have the permission to update your role'
        });
      }
    }
    models.User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return models.User.update({
          where: { id: req.params.userId }
        }, {
          firstName: req.body.firstName || user.firstName,
          lastName: req.body.lastName || user.lastName,
          username: req.body.username || user.username,
          email: req.body.email || user.email,
          password: bcrypt.hashSync(req.body.password, salt) || user.password,
          role: req.body.role || user.role
        }).then((updatedUser) => {
          res.status(200).send({
            message: 'User successfully updated',
            updatedUser
          });
        }).catch();
      }).catch();
  },

  deleteUser(req, res) {
    models.User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: 'User Not Found' });
        }
        return user.destroy()
          .then(() => res.status(200).send({
            message: 'User successfully deleted'
          })).catch();
      }).catch();
  }
};
