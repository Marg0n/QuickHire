import AppError from '../../errors/AppError.js';
import type { IUser } from './user.interface.js';
import User from './user.model.js';
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

const createUser = async (payload: IUser): Promise<IUser> => {
  await checkIfUserExists(payload.email);
  console.log('payload', payload);
  // payload.role = 'admin';
  const result = await User.create(payload);

  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const updateUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
