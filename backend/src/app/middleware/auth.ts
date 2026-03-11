/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../errors/AppError.js';
import config from '../config/index.js';
import type { TUserRole } from '../modules/user/user.interface.js';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // const token = req.headers.authorization?.split(' ')[1];
    // const secret = config.jwt_secret;

    //? token check
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
    }

    //? validity check
    let decoded: any;
    try {
      decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
    } catch (err: any) {
      console.log('err', err);
      throw new AppError(httpStatus.UNAUTHORIZED, `UNAUTHORIZED: ${err}`);
    }

    const { role } = decoded;

    //? if error
    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        'You have no permission to access this route',
      );
    }

    //? user decoded
    req.user = decoded;
    next();
  });
};

export default auth;
