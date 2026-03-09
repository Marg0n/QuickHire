import express, { type NextFunction, type Request, type Response } from 'express';
import { UserControllers } from './user.controller.js';
import validateRequest from '../../middleware/validateRequest.js';
import { userValidations } from './user.validation.js';

const router = express.Router();

router.post(
  '/create-admin',
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(userValidations.userValidationSchema),
  UserControllers.createAdmin,
);


export const UserRoutes = router;