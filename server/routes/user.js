import express from 'express';
import userController from '../controllers/user';
import validateToken from '../middleware/validateToken';
import { verifyAdmin } from '../middleware/verifyRole';
import validateUserId from '../middleware/validateUserId';

const router = express.Router();

/* eslint-disable function-paren-newline */

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Welcome to Primedeck API'
  });
});


router.post('/api/v1/users/signin', userController.signin);

router.post(
  '/api/v1/users/register',
  validateToken,
  verifyAdmin,
  userController.register
);

router.get(
  '/api/v1/users',
  validateToken,
  userController.allUsers
);

router.get(
  '/api/v1/users/count',
  validateToken,
  userController.allUsersCount
);

router.get(
  '/api/v1/users/:userId',
  validateToken,
  validateUserId,
  userController.singleUser
);

router.put(
  '/api/v1/users/:userId',
  validateToken,
  validateUserId,
  userController.updateUser
);

router.delete(
  '/api/v1/users/:userId',
  validateToken,
  verifyAdmin,
  validateUserId,
  userController.deleteUser
);

export default router;
