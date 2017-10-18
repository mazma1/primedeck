import express from 'express';
import userController from '../controllers/user';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.post('/api/v1/users/signin', userController.signin);
router.post('/api/v1/users/register', validateToken, userController.register);
router.get('/api/v1/users', validateToken, userController.allUsers);
router.get('/api/v1/users/:userId', validateToken, userController.singleUser);
router.put('/api/v1/users/:userId', validateToken, userController.updateUser);
router.delete('/api/v1/users/:userId', validateToken, userController.deleteUser);

export default router;
