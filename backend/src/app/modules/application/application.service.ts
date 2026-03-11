import { Job } from '../job/job.model.js';
import type { IApplicationUser } from './application.interface.js';
import { Application } from './application.model.js';

const createApplicationIntoDB = async (payload: IApplicationUser) => {
  const isJobExist = await Job.findById(payload.job_id);

  if (!isJobExist) {
    throw new Error('This job does not exist!');
  }

  const result = await Application.create(payload);
  return result;
};

const getApplications = async () => {
  const result = await Application.find().populate('job_id');
  return result;
};

export const applicationServices = {
  createApplicationIntoDB,
  getApplications,
};
