import express from 'express';
import fileController from '../controllers/file';
import validateToken from '../middleware/validateToken';
import { verifyTeacher } from '../middleware/verifyRole';

const router = express.Router();

/* eslint-disable function-paren-newline */
router.post(
  '/api/v1/files/upload',
  validateToken,
  verifyTeacher,
  fileController.uploadDoc
);

export default router;
