import { Response } from 'express';
type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
}
type TSuccessResponse<T> = {
  success?: boolean;
  statusCode: number;
  message: string;
  accessToken?: string;
  meta?: TMeta;
  data?: T | T[] | null;
};

const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.json({
    success: true,
    statusCode: data.statusCode,
    message: data.message,
    accessToken: data.accessToken,
    meta: data.meta,
    data: data.data,
  });
};
export default sendResponse;
