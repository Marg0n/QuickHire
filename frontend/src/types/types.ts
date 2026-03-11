/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";

//? type
export type CardBoxProps = {
  icon: ReactNode;
  type?: string;
  title: string;
  platform?: string;
  address?: string;
  description?: string;
  tags?: string[];
  className?: string;
};

export type CustomFormFieldProps = {
  label: string;
  name: string;
  type?: string;
  register: any;
  error?: any;
  children?: React.ReactNode;
};
