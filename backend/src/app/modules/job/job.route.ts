import express from 'express';
import { JobControllers } from './job.controller.js';

const router = express.Router()

router.get('/', JobControllers.getAllJobs);

router.get('/:id', JobControllers.getSingleJob);

router.post(
  '/', 
  JobControllers.createJob
);


router.delete('/:userId', JobControllers.deleteJob);

export const JobRoutes = router;