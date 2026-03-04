import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

//? type
type FeaturedBoxProps = {
  icon: ReactNode;
  type: string;
  title: string;
  platform: string;
  address: string;
  description: string;
  tags: string[];
  className?: string;
};

const FeaturedBox = ({
  icon,
  type,
  title,
  platform,
  address,
  tags,
  description,
  className,
}: FeaturedBoxProps) => {
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
      <div className="mb-4 text-4xl text-primary group-hover:text-white flex justify-between items-center w-full">
        <div>{icon}</div>
        {"  "}
        <div className="border border-primary text-base p-2">{type}</div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-xl mb-1 font-semibold group-hover:text-white ">
            {title}
          </h3>

          {/* platform */}
          <p className="flex items-center gap-2 text-gray-600 group-hover:text-white ">
            {platform} · {address}
          </p>
        </div>
        {/* title */}

        {/* description */}
        <p className=" text-gray-600 group-hover:text-white ">
          {description.slice(0, 50)} ...
        </p>

        <div className="space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs border rounded-2xl px-2 py-1 border-amber-500 bg-amber-300 "
            >
              {tags.length - 1 === index ? tag : `${tag}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
