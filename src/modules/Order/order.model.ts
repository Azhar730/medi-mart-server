import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    medicines: [
      {
        medicine: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Medicine',
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, 'Quantity must be at least 1'],
        },
      },
    ],
    totalPrice: {
      type: Number,
      min: [0, 'Total price must be positive'],
    },
    deliveryCharge: {
      type: Number,
      min: [0, 'deliveryCharge must be positive'],
    },
    shippingAddress: {
      type: String,
      required: [true, 'Address is Required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is Required'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    transaction: {
      id: String,
      transactionStatus: String,
      bank_status: String,
      sp_code: String,
      sp_message: String,
      method: String,
      date_time: String,
    },
    shippingStatus: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true },
);
export const Order = model<TOrder>('Order', orderSchema);
