import { model, Schema } from 'mongoose';
import type { IUser } from './user.interface.js';
import bcrypt from 'bcrypt';
import config from '../../config/index.js';

//? Schema for User collection
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please provide a name.'],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Please provide email address.'],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Please provide a password.'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: '{VALUE} is not valid. Please provide a valid type.',
      },
      required: [true, 'Please provide a role.'],
      default: 'user',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//? Middleware for hashing the password before inserting into DB
userSchema.pre('save', async function () {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;

  //? Skip hashing if not changed
  if (!user.isModified('password')) return;

  //? hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
});

//? Model for User collection
const User = model<IUser>('User', userSchema);

export default User;
