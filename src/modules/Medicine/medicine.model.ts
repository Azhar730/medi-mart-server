import { model, Schema } from 'mongoose';
import { TMedicine } from './medicine.interface';

const medicineSchema = new Schema<TMedicine>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    requiredPrescription: {
      type: String,
      enum: ['Yes', 'No'],
      required: [true, 'Required prescription is required'],
    },
    manufacturer: {
      type: String,
      required: [true, 'Manufacturer is required'],
    },
    expiryDate: {
      type: Date,
      required: [true, 'Expiry date is required'],
      validate: {
        validator: function (value: Date) {
          return value > new Date();
        },
        message: 'Expiry date must be in the future',
      },
    },
    quantity: {
      type: Number,
      min: [0, 'Quantity must be a positive number'],
      required: [true, 'Quantity is required'],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    isDeleted: { type: Boolean, default: false },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true },
);
export const Medicine = model<TMedicine>('Medicine', medicineSchema);
