import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { MedicineRoutes } from './modules/Medicine/medicine.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import { UserRoutes } from './modules/User/user.route';
import { OrderRoutes } from './modules/Order/order.route';
import { AuthRoute } from './modules/Auth/auth.route';
import reviewRoutes from './modules/review/review.route';
const app: Application = express();
app.use(express.json());
app.use(cors({ origin: 'https://medimart-nu.vercel.app', credentials: true }));

app.use('/api/auth', AuthRoute);
app.use('/api/medicines', MedicineRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/reviews', reviewRoutes);

const getController = (req: Request, res: Response) => {
  res.send('Hello from Medi Mart!');
};

app.get('/', getController);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
