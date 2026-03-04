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