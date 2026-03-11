import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { UserControllers } from './user.controller.js';
import validateRequest from '../../middleware/validateRequest.js';
import { userValidations } from './user.validation.js';

const router = express.Router();

router.post(
  '/create',
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(userValidations.userValidationSchema),
  UserControllers.createAdmin,
);

router.get('/:userId', UserControllers.getSingleUser);

router.put('/:userId', UserControllers.updateUser);

router.delete('/:userId', UserControllers.deleteUser);
router.get('/', UserControllers.getAllUser);

export const UserRoutes = router;
