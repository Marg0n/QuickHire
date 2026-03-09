import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ message: 'Name is not a valid string' })
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot exceed 50 characters'),

    email: z
      .string({ message: 'Email is required' })
      .email('Invalid email address'),

    password: z
      .string({ message: 'Password is required' })
      .min(4, 'Password should not be less than 4 characters')
      .max(20, 'Password should not be more than 20 characters'),
  }),
});

export const userValidations = {
  userValidationSchema,
};
