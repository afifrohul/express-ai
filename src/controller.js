import fs from 'fs';
import { predictImage, getPredictions } from './predict-services.js';

export const getPredictResult = async (req, res) => {
  const photo = fs.readFileSync(req.file.path);
  const photoName = req.file.originalname;
  const predict = await predictImage(photo, photoName);
  const { diseaseLabel, confidenceScore } = predict;

  return res.status(200).json({
    status: 'success',
    message: 'Predict success',
    data: {
      disease: diseaseLabel,
      confidenceScore
    }
  });
};

export const getPredictionHistory = async (req, res) => {

  const predictions = await getPredictions();

  return res.status(200).json({
    status: 'success',
    message: 'Data retrieved successfully',
    data: predictions
  });
};