import type { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { jobServices } from "./job.service.js";
import httpStatus from 'http-status';

//* Get All Jobs
const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const result = await jobServices.getAllJobs();

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs fetched successfully',
    data: result,
  });
});

//* Get Single Job
const getSingleJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await jobServices.getSingleJob(id as string);

  if (!result) {
    return sendResponse.sendUpdateResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Job not found',
      data: null,
    });
  }

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job details fetched successfully',
    data: result,
  });
});

//* Create Job (Admin)
const createJob = catchAsync(async (req: Request, res: Response) => {
  const result = await jobServices.createJobIntoDB(req.body);

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
});

//* Delete job (admin)
const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await jobServices.deleteJobFromDB(id as string);

  sendResponse.sendUpdateResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user deleted successfully',
    data: {},
  });
});

export const JobController = {
    deleteJob,
}