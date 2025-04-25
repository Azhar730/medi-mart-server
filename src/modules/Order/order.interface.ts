import { Types } from 'mongoose';

export interface IOrderMedicine {
  medicine: Types.ObjectId;
  quantity: number;
}

export type TOrder = {
  user: Types.ObjectId;
  medicines: IOrderMedicine[];
  totalPrice: number;
  deliveryCharge: number;
  shippingAddress: string;
  phoneNumber: string;
  status?: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  transaction?: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  shippingStatus?: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
};
