import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from 'http-status';
import { UserServices } from "./user.service.js";

const createAdmin = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await UserServices.createAdmin(payload);

  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

export const UserControllers = {
  createAdmin,
};