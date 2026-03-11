/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { loginUser, reCaptchaTokenVerification } from "@/services/AuthService";
import Link from "next/link";
import {
  // useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";
import { FieldValues, Form, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginValidation";
import { toast } from "react-toastify";
import logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CustomFormField from "@/components/ui/CustomFormField";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function LoginForm() {
  //* react hook form
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  //* toggle password
  const [showPassword, setShowPassword] = useState(false);

  const [reCaptchaStatus, setReCaptchaStatus] = useState(false);

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const handleReCaptcha = async (value: string | null) => {
    try {
      const res = await reCaptchaTokenVerification(value!);
      if (res?.success) {
        setReCaptchaStatus(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // reCaptchaStatus check
    if (!reCaptchaStatus) {
      toast.error("Please complete the reCAPTCHA first.");
      return; // Block submission
    }

    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
        if (typeof window !== "undefined") {
          localStorage.setItem("authToken", res?.token);
        }
        console.log(res?.token);
        // window.location.href = redirect || "/";

        if (typeof window !== "undefined") {
          window.location.assign(redirect || "/");
        }

        // router.push(redirect || "/");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  //! Function to fill credentials
  const fillCredentials = (type: "admin" | "user") => {
    const credentials = {
      admin: {
        email: "sokhorio@example.com",
        password: "strongPassword123",
      },
      user: {
        email: "monon@example.com",
        password: "strongPassword123",
      },
    };

    form.setValue("email", credentials[type].email);
    form.setValue("password", credentials[type].password);
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5 space-y-6">
      {/* logo */}
      <div className="flex items-center space-x-4 ">
        <Link href="/">
          <Image src={logo} alt="Quick Hire Logo" width={152} height={36} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">
            Welcome back dear user!
          </p>
        </div>
      </div>

      {/* Buttons to fill credentials */}
      <div className="flex justify-around space-x-2">
        <Button
          type="button"
          variant={1}
          className="bg-[#4F46E5] text-white hover:text-black"
          onClick={() => fillCredentials("admin")}
        >
          Fill Admin Credentials
        </Button>
        <Button
          type="button"
          variant={1}
          className="bg-[#4F46E5] text-white hover:text-black"
          onClick={() => fillCredentials("user")}
        >
          Fill User Credentials
        </Button>
      </div>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomFormField
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />

        <CustomFormField
          label="Password"
          name="password"
          register={register}
          error={errors.password}
        >
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
        </CustomFormField>

        <Button
          variant={1}
          className="mt-5 w-full bg-[#4F46E5] text-white hover:text-black"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging...." : "Login"}
        </Button>
      </form>

      <p className="text-sm text-gray-600 text-center my-3">
        Do not have any account?
        <Link href="/register" className="text-[#4F46E5] ml-2">
          Register
        </Link>
      </p>
    </div>
  );
}
