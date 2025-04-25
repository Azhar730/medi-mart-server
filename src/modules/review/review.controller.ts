import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { ReviewService } from "./review.service";

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewService.createReview(req.body);
  sendResponse(res, {
    success: true,
    message: "Review submitted successfully",
    statusCode: 201,
    data: result,
  });
});

const getAllReview = catchAsync(async (req, res) => {
    const result = await ReviewService.getAllReviewFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Reviews are retrieved successfully',
      data: result,
    });
  });

export const ReviewController = {
  createReview,
  getAllReview,
};