import type { IJob } from "./job.interface.js";
import { Job } from "./job.model.js";

//* get all jobs
const getAllJobs = async () => {
  const result = await Job.find();
  return result;
};

//* Get a single job
const getSingleJob = async (id: string) => {
  const result = await Job.findById(id);
  return result;
};

//* Create job (admin)
const createJobIntoDB = async (payload: IJob) => {
  const result = await Job.create(payload);
  return result;
};

//* Delete a job (Admin)
const deleteJobFromDB = async (id: string) => {
  const result = await Job.findByIdAndDelete(id);
  return result;
};

export const jobServices = {
    getAllJobs,
    getSingleJob,
    createJobIntoDB,
    deleteJobFromDB,
}