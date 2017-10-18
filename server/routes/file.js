import express from 'express';
import fileController from '../controllers/file';
import validateToken from '../middleware/validateToken';

const router = express.Router();

/* eslint-disable function-paren-newline */
router.post(
  '/api/v1/files/upload',
  validateToken,
  fileController.uploadDoc
);

export default router;
