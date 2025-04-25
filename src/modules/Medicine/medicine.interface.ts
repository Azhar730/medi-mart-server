export type TMedicine = {
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  requiredPrescription: "Yes"|"No";
  manufacturer: string;
  expiryDate: Date;
  inStock: boolean;
  isDeleted: boolean;
  image?: string;
};
