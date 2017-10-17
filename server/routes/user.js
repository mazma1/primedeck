import express from 'express';
import userController from '../controllers/user';

const router = express.Router();

router.post('/api/v1/users/signin', userController.signin);

export default router;
