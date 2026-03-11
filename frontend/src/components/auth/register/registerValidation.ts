import { z } from "zod";

export const registrationSchema = z
  .object({
    name: z
      .string({ message: "Name is required" })
      .min(2, "Name must be between 2 and 50 characters")
      .max(50, "Name must be between 2 and 50 characters"),
    email: z
      .string({ message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string({ message: "Password is required" })
      .min(4, "Password must be at least 4 characters"),
    passwordConfirm: z
      .string({ message: "Password Confirmation is required" })
      .min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });