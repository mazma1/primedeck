import express from 'express';
import userController from '../controllers/user';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.post('/api/v1/users/signin', userController.signin);
router.post('/api/v1/users/register', validateToken, userController.register);
router.get('/api/v1/users', validateToken, userController.allUsers);

export default router;
