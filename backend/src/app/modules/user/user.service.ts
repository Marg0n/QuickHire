import AppError from "../../errors/AppError.js";
import type { IUser } from "./user.interface.js";
import User from "./user.model.js";
import httpStatus from 'http-status';

const checkIfUserExists = async (email: string) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'User with this email already exists',
    );
  }
};

const createAdmin = async (payload: IUser): Promise<IUser> => {
  await checkIfUserExists(payload.email);
  console.log('payload', payload);
  payload.role = 'admin';
  const result = await User.create(payload);

  return result;
};

export const UserServices = {
  createAdmin,
};