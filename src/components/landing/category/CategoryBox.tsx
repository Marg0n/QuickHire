import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

type CategoryBoxProps = {
  icon: ReactNode;             
  title: string;                
  description: string;         
  className?: string;           
};

const CategoryBox = ({
  icon,
  title,
  description,
  className,
}: CategoryBoxProps) => {
  return (
    <div
      className={`border border-primary p-6 rounded-lg transition hover:shadow-md ${className ?? ""}`}
    >
      {/* icon */}
      <div className="mb-4 text-3xl text-primary">
        {icon}
      </div>

      {/* title */}
      <h3 className="text-2xl font-bold mb-2">
        {title}
      </h3>

      {/* description */}
      <p className="flex items-center gap-2 text-gray-600">
        {description}
        <FaArrowRight className="text-sm" />
      </p>
    </div>
  );
};

export default CategoryBox;