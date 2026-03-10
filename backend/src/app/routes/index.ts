import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route.js';
import { JobRoutes } from '../modules/job/job.route.js';
import { ApplicationRoutes } from '../modules/application/application.route.js';
import { AuthRoutes } from '../modules/auth/auth.route.js';

const router = Router();

//* List of routes
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/applications',
    route: ApplicationRoutes,
  },
  {
    path: '/job',
    route: JobRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

//* Individual routes
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;