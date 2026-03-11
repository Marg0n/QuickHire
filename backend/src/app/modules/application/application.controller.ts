import type { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import { applicationServices } from "./application.service.js";
import { sendResponse } from "../../utils/sendResponse.js";

const createApplication = catchAsync(async (req: Request, res: Response) => {
  const result = await applicationServices.createApplicationIntoDB(req.body);

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Application submitted successfully!",
    data: result,
  });
});

export const ApplicationControllers = {
  createApplication,
};
