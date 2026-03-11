/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/services/AuthService";
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import CustomFormField from "@/components/ui/CustomFormField";
import Button from "@/components/ui/Button";



export default function RegisterForm() {
  // react hook form
  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  // router
  const router = useRouter();

  // toggle password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = form.watch("password");
  const passwordConfirm = form.watch("passwordConfirm");
  //   console.log(password, passwordConfirm);

  // handle submit
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(res?.message);
        form.reset(); // reset form
        router.push("/login"); // redirect to login
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5 space-y-6">
      <div className="flex items-center space-x-4 ">
        <Link href='/'>
          <Image src={logo} alt="Quick Hire Logo" width={152} height={36} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <CustomFormField
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />

        {/* Email */}
        <CustomFormField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        {/* Password */}
        <CustomFormField
          label="Password"
          name="password"
          register={register}
          error={errors.password}
        >
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <LuEye size={18} /> : <LuEyeClosed size={18} />}
            </button>
          </div>
        </CustomFormField>

        {/* Confirm Password */}
        <CustomFormField
          label="Confirm Password"
          name="passwordConfirm"
          register={register}
          error={errors.passwordConfirm}
        >
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              {...register("passwordConfirm")}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.passwordConfirm || (passwordConfirm && password !== passwordConfirm)
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <LuEye size={18} /> : <LuEyeClosed size={18} />}
            </button>
          </div>
        </CustomFormField>

        {/* Custom Match Error Message */}
        {passwordConfirm && password !== passwordConfirm && (
          <p className="text-xs text-red-500 mt-1">Password does not match</p>
        )}

        <Button
          className="mt-5 w-full bg-[#4F46E5] text-white hover:text-black py-2 rounded-md"
          type="submit"
          disabled={!!isSubmitting || !!(passwordConfirm && password !== passwordConfirm)}
        >
          {isSubmitting ? "Registering...." : "Register"}
        </Button>
      </form>

      <p className="text-sm text-gray-600 text-center my-3">
        Already have an account?
        <Link href="/login" className="text-[#4F46E5] ml-2">
          Login
        </Link>
      </p>
    </div>
  );
}