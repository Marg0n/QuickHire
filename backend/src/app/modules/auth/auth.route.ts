import express from 'express';
import validateRequest from '../../middleware/validateRequest.js';
import { userValidations } from '../user/user.validation.js';
import { authController } from './auth.controller.js';
import { authValidation } from './auth.validation.js';
import auth from '../../middleware/auth.js';
import { USER_ROLE } from '../user/user.constant.js';

const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidations.userValidationSchema),
  () => {
    console.log('registered in path');
  },
  authController.register,
);
router.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  () => {
    console.log('login path');
  },
  authController.login,
);
router.post(
  '/refreshToken',
  validateRequest(authValidation.refreshTokenValidationSchema),
  authController.refreshToken,
);

router.put(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(authValidation.changePasswordValidationSchema),
  authController.changePassword,
);

export const AuthRoutes = router;
