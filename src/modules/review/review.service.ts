import { startSession } from 'mongoose';
import { IReview } from './review.interface';
import { Review } from './review.model';
import AppError from '../../app/errors/AppError';
import User from '../User/user.model';
import { Medicine } from '../Medicine/medicine.model';

const createReview = async (payload: IReview) => {
  const isAlreadyReviewed = await Review.findOne({
    user: payload?.user,
    medicine: payload?.medicine,
  });
  if (isAlreadyReviewed) {
    throw new AppError(409, 'You have already reviewed this meal');
  }
  const isUserExist = await User.findById(payload?.user);
  if (!isUserExist) {
    throw new AppError(404, 'User not found');
  }
  const medicine = await Medicine.findById(payload?.medicine);
  if (!medicine) {
    throw new AppError(404, 'Medicine not found');
  }
  const session = await startSession();
  try {
    await session.startTransaction();
    const review = await Review.create([payload], { session });

    // Calculate new average rating
    const newTotalRatings = (medicine.totalRatings ?? 0) + 1;
    const newAvgRating =
      (medicine.ratings * (medicine.totalRatings ?? 0) + payload.rating) /
      newTotalRatings;

    // Update the meal object directly (safer than findByIdAndUpdate)
    medicine.totalRatings = newTotalRatings;
    medicine.ratings = newAvgRating;

    // Save the meal with session
    await medicine.save({ session });

    await session.commitTransaction();
    return review[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  } finally {
    await session.endSession();
  }
};
const getAllReviewFromDB = async () => {
  const result = await Review.find()
    .sort({ createdAt: -1 })
    .limit(6)
    .populate('user medicine');
  return result;
};
export const ReviewService = {
  createReview,
  getAllReviewFromDB,
};
