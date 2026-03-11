import { Job } from "./job.model.js";

//* get all jobs
const getAllJobs = async () => {
  const result = await Job.find();
  return result;
};