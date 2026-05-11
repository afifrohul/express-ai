import express from 'express';
import { getPredictResult, getPredictionHistory } from './controller.js';
import { upload } from './storage-config.js';

const router = express.Router();

router.get('/predict-history', getPredictionHistory);
router.post('/predict', upload.single('file'), getPredictResult);

export default router;