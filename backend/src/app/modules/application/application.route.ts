import express from 'express';
import { ApplicationControllers } from './application.controller.js';

const router = express.Router();

router.post('/', ApplicationControllers.createApplication);

export const ApplicationRoutes = router;
