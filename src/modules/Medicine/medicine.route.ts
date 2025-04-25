import { NextFunction, Request, Response, Router } from 'express';
import { MedicineControllers } from './medicine.controller';
import { upload } from '../../app/utils/imageUpload';
import auth from '../../middlewares/auth';

const router = Router();
router.post(
  '/create-medicine',
  auth('admin'),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  MedicineControllers.createMedicine,
);
router.get('/:medicineId', MedicineControllers.getSingleMedicine);
router.put(
  '/:medicineId',
  auth('admin'),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  MedicineControllers.updateMedicine,
);
router.delete('/:medicineId', auth('admin'), MedicineControllers.deleteMedicine);
router.get('/', MedicineControllers.getAllMedicine);
export const MedicineRoutes = router;
