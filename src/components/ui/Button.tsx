import { clsx } from "clsx";

type ButtonVariant = 1 | 2 | 3 | 4 | 5 | 6;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 1,
  className,
  children,
  ...props
}) => {
  //? Base styles
  const baseStyles = "px-6 py-2 transition duration-300 rounded";

  //? Define Tailwind classes for each variant
  const variantStyles: Record<ButtonVariant, string> = {
    1: "border border-[#4640DE] bg-[#4640DE]  text-[#fff] hover:bg-transparent hover:text-[#000] ",
    2: "border border-[#4640DE] hover:bg-[#4640DE] text-primary hover:text-[#fff] ",
    3: "dark:border-slate-800 dark:text-[#abc2d3] dark:bg-slate-800 dark:hover:bg-transparent dark:hover:text-[#abc2d3] border border-[#3e3939] bg-[#000000] text-[#fff] hover:bg-secondary hover:text-[#000] ",
    4: "border dark:border-slate-800 dark:text-[#abc2d3] dark:hover:bg-slate-800 border-[#3e3939] hover:bg-[#000000] text-[#000] hover:text-[#fff] ",
    5: "border border-[#9d3533] bg-[#DE3B37] text-[#fff] hover:bg-secondary hover:text-[#000] dark:hover:bg-transparent dark:hover:text-[#000] ",
    6: "border dark:text-[#abc2d3] border-[#9d3533] hover:bg-[#DE3B37] text-[#000] hover:text-[#fff] ",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        className, 
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
