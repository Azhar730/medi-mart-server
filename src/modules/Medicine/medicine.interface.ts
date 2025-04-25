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
  ratings: number;
  totalRatings?: number;
  isDeleted: boolean;
  image?: string;
};
