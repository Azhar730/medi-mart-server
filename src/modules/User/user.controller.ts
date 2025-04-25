import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { userServices } from './user.service';


const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Users retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserFromDB(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User retrieved successful',
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const data = req.body;
  const { userId } = req.params;
  const result = await userServices.updateUserIntoDB(userId, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  await userServices.deleteUserFromDB(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User deleted successfully',
    data: {},
  });
});
export const userControllers = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
