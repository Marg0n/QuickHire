import type { Response } from 'express';
import httpStatus from 'http-status';

//* Generic type for response
type TResponse<T> = {
  status?: boolean;
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data: T | T[] | null;
};

//? Fetching data
const sendDataResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.OK,
    token: data.token,
    data: data.data,
  });
};

//? Create
const sendCreateDataResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.CREATED,
    token: data.token,
    data: data.data,
  });
};

//? Update
const sendUpdateResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: httpStatus.OK,
    data: data.data,
  });
};

export const sendResponse = {
  sendDataResponse,
  sendUpdateResponse,
  sendCreateDataResponse,
};
