import { Router } from 'express';
import auth from '../../middlewares/auth';
import { ReviewController } from './review.controller';

const reviewRoutes = Router();

reviewRoutes.post(
  '/create-review',
  auth('user', 'admin'),
  ReviewController.createReview,
);
reviewRoutes.get('/', ReviewController.getAllReview);
export default reviewRoutes;
