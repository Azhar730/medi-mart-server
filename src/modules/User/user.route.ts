import { Router } from 'express';
import { userControllers } from './user.controller';
import auth from '../../middlewares/auth';

const userRoute = Router();

userRoute.get('/:userId', userControllers.getSingleUser);
userRoute.put('/:userId',auth('admin'), userControllers.updateUser);
userRoute.delete('/:userId',auth('admin'), userControllers.deleteUser);
userRoute.get('/',auth('admin'), userControllers.getAllUser);
export const UserRoutes = userRoute;
