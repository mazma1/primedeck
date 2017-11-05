import express from 'express';
import courseController from '../controllers/course';
import validateToken from '../middleware/validateToken';
import { verifyTeacher } from '../middleware/verifyRole';

const router = express.Router();

/* eslint-disable function-paren-newline */
router.get(
  '/api/v1/courses',
  validateToken,
  courseController.getAllCourses
);

export default router;
