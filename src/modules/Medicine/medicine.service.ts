import QueryBuilder from '../../app/builder/QueryBuilder';
import { sendImageToCloudinary } from '../../app/utils/imageUpload';
import { TMedicine } from './medicine.interface';
import { Medicine } from './medicine.model';

const createMedicineIntoDB = async (file: any, payload: TMedicine) => {
  const imageName = `${payload.name}`;
  const path = file?.path;
  const { secure_url } = await sendImageToCloudinary(imageName, path);
  payload.image = secure_url as string;
  const result = await Medicine.create(payload);
  return result;
};
const getAllMedicineFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = [
    'name',
    'category',
  ];
  const medicinesQuery = new QueryBuilder(
    Medicine.find({ isDeleted: false }),
    query,
  )
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await medicinesQuery.modelQuery;
  const meta =await medicinesQuery.countTotal()
  return { meta, result };
};
const getSingleMedicineFromDB = async (id: string) => {
  const result = await Medicine.findById(id);
  return result;
};
const updateMedicineIntoDB = async (
  id: string,
  payload: Partial<TMedicine>,
  file?: any,
) => {
  let secure_url;
  if (file) {
    const imageName = `${payload.name}`;
    const path = file?.path;
    const response = await sendImageToCloudinary(imageName, path);
    secure_url = response.secure_url;
  }
  const updatedFields = {
    ...payload,
    ...(secure_url ? { image: secure_url } : {}),
    ...(payload.quantity !== undefined && { inStock: payload.quantity > 0 }),
  };
  const result = await Medicine.findByIdAndUpdate(id, updatedFields, {
    new: true,
  });
  return result;
};
const deleteMedicineFromDB = async (id: string) => {
  const result = await Medicine.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};
export const MedicineServices = {
  createMedicineIntoDB,
  getAllMedicineFromDB,
  getSingleMedicineFromDB,
  updateMedicineIntoDB,
  deleteMedicineFromDB,
};
