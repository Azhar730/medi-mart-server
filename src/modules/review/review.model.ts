import { model, Schema } from 'mongoose';
import { IReview } from './review.interface';

const ReviewSchema = new Schema<IReview>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'userId is required'],
    },
    medicine: {
      type: Schema.Types.ObjectId,
      ref: 'Medicine',
      required: [true, 'Medicine is required'],
    },
    comment: { type: String, required: [true, 'Comment is required'] },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      minlength: 1,
      maxlength: 5,
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const Review = model<IReview>('Review', ReviewSchema);
