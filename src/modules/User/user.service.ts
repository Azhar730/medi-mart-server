import QueryBuilder from '../../app/builder/QueryBuilder';
import { IUser } from './user.interface';
import User from './user.model';

const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(['name', 'email'])
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await userQuery.modelQuery;
  const meta = await userQuery.countTotal();
  return {
    meta,
    result,
  };
};
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const updateUserIntoDB = async (id: string, data: Partial<IUser>) => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
export const userServices = {
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
