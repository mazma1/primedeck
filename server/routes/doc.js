import express from 'express';
import docController from '../controllers/doc';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.post('/api/v1/docs/upload', validateToken, docController.uploadDoc);

export default router;
