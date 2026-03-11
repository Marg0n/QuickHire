import catchAsync from '../../utils/catchAsync.js';
import { sendResponse } from '../../utils/sendResponse.js';
import httpStatus from 'http-status';
import { UserServices } from './user.service.js';
import type { Request, Response } from 'express';

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await UserServices.createUser(payload);

  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUser();

  sendResponse.sendDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users getting successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.params)
  const userId = req.params.userId;

  const result = await UserServices.getSingleUser(userId as string);

  sendResponse.sendDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User getting successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const body = req.body;
  const result = await UserServices.updateUser(userId as string, body);

  sendResponse.sendDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  await UserServices.deleteUser(userId as string);

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user deleted successfully',
    data: {},
  });
});

export const UserControllers = {
  createAdmin,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
