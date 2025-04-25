import { Types } from "mongoose";

export interface IReview {
  user: Types.ObjectId;
  medicine: Types.ObjectId;
  comment: string;
  rating: number;
  isDeleted?: boolean;
}