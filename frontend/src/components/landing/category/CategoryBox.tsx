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
      className={`
        border border-primary p-6 rounded-lg transition hover:shadow-md 
        hover:bg-primary group
        flex flex-row md:flex-col gap-6 md:gap-2
        md:items-start md:justify-center items-center justify-start
        ${className ?? ""}
        `}
    >
      {/* icon */}
      <div className="mb-4 text-4xl text-primary group-hover:text-white ">
        {icon}
      </div>

      <div>
        {/* title */}
        <h3 className="text-2xl font-bold mb-2 group-hover:text-white ">
          {title}
        </h3>

        {/* description */}
        <p className="flex items-center gap-2 text-gray-600 group-hover:text-white text-sm">
          {description}
          <FaArrowRight className="text-sm" />
        </p>
      </div>
    </div>
  );
};

export default CategoryBox;
