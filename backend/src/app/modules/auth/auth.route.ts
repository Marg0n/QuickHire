import express from 'express';
import validateRequest from '../../middleware/validateRequest.js';
import { userValidations } from '../user/user.validation.js';
import { authController } from './auth.controller.js';
import { authValidation } from './auth.validation.js';

const router = express.Router()

router.post(
  '/register',
  validateRequest(userValidations.userValidationSchema),
  authController.register,
);
router.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.login,
);
router.post(
  '/refreshToken',
  validateRequest(authValidation.refreshTokenValidationSchema),
  authController.refreshToken,
);

router.put(
  '/change-password',
  validateRequest(authValidation.changePasswordValidationSchema),
  authController.changePassword,
);

export const AuthRoutes = router;