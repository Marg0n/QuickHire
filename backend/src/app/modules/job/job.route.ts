import express from 'express';
import { JobControllers } from './job.controller.js';
import { USER_ROLE } from '../user/user.constant.js';
import auth from '../../middleware/auth.js';

const router = express.Router();

router.get('/', JobControllers.getAllJobs);

router.get('/:id', JobControllers.getSingleJob);

router.post(
  '/',
  // auth(USER_ROLE.admin),
  JobControllers.createJob,
);

router.delete('/:userId', auth(USER_ROLE.admin), JobControllers.deleteJob);

export const JobRoutes = router;
