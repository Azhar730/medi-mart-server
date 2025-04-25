import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { MedicineServices } from './medicine.service';

const createMedicine = catchAsync(async (req, res) => {
  const file = req.file;
  const result = await MedicineServices.createMedicineIntoDB(file, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Medicine created successfully',
    data: result,
  });
});
const getAllMedicine = catchAsync(async (req, res) => {
  const result = await MedicineServices.getAllMedicineFromDB(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Medicines retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});
const getSingleMedicine = catchAsync(async (req, res) => {
  const { medicineId } = req.params;
  const result = await MedicineServices.getSingleMedicineFromDB(medicineId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Medicine retrieved successfully',
    data: result,
  });
});
const updateMedicine = catchAsync(async (req, res) => {
  const { medicineId } = req.params;
  const result = await MedicineServices.updateMedicineIntoDB(
    medicineId,
    req.body,
    req?.file,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Medicine updated successfully',
    data: result,
  });
});
const deleteMedicine = catchAsync(async (req, res) => {
  const { medicineId } = req.params;
  await MedicineServices.deleteMedicineFromDB(medicineId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Medicine deleted successfully',
    data: {},
  });
});
export const MedicineControllers = {
  createMedicine,
  getAllMedicine,
  getSingleMedicine,
  updateMedicine,
  deleteMedicine,
};
