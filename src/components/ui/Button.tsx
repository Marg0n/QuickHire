

type ButtonVariant = 1 | 2 | 3 | 4 | 5 | 6;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant; //? optional, defaults to 1
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 1, children, ...props }) => {
  //? Define Tailwind classes for each variant
  const variantClasses: Record<ButtonVariant, string> = {
    1: "px-6 py-2 border border-[#4640DE] bg-primary text-[#fff] hover:bg-secondary hover:text-[#4640DE] dark:hover:bg-transparent transition duration-300 rounded",
    2: "px-6 py-2 border border-[#4640DE] hover:bg-[#4640DE] text-primary hover:text-[#fff] transition duration-300 rounded",
    3: "px-6 py-2 dark:border-slate-800 dark:text-[#abc2d3] dark:bg-slate-800 dark:hover:bg-transparent dark:hover:text-[#abc2d3] border border-[#3e3939] bg-[#000000] text-[#fff] hover:bg-secondary hover:text-[#000] transition duration-300 rounded",
    4: "px-6 py-2 border dark:border-slate-800 dark:text-[#abc2d3] dark:hover:bg-slate-800 border-[#3e3939] hover:bg-[#000000] text-[#000] hover:text-[#fff] transition duration-300 rounded",
    5: "px-6 py-2 border border-[#9d3533] bg-[#DE3B37] text-[#fff] hover:bg-secondary hover:text-[#000] dark:hover:bg-transparent dark:hover:text-[#abc2d3] transition duration-300 rounded",
    6: "px-6 py-2 border dark:text-[#abc2d3] border-[#9d3533] hover:bg-[#DE3B37] text-[#000] hover:text-[#fff] transition duration-300 rounded",
  };

  return (
    <button className={variantClasses[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;