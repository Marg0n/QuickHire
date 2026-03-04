import { CardBoxProps } from "@/types/types";
import React from "react";

const LatestBox = ({
  icon,
  type,
  title,
  platform,
  address,
  tags,
  className,
}: CardBoxProps) => {
  return (
    <div
      className={`
                border border-primary p-2 rounded-lg transition hover:shadow-md 
                hover:bg-primary group
                flex flex-row md:flex-col gap-6 md:gap-2
                md:items-start md:justify-center items-center justify-start
                ${className ?? ""}
                `}
    >
      {/* icon */}
      <div className=" group-hover:text-white flex flex-col md:flex-row gap-2 justify-center items-start p-4 md:p-0 w-full">
        <div className="w-1/4 h-full text-4xl flex justify-center items-center">
          {icon}
        </div>

        <div className="w-3/4 space-y-4">
          <div>
            <h3 className="text-xl mb-1 font-semibold group-hover:text-white ">
              {title}
            </h3>

            {/* platform */}
            <p className="flex items-center gap-2 text-gray-600 group-hover:text-white ">
              {platform} · {address}
            </p>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2">
            <div className="border border-emerald-700 bg-emerald-300 group-hover:bg-green-600 rounded-2xl px-2 py-1 text-xs min-w-16">
              {type}
            </div>
            <span className="text-gray-500">|</span>
            <div className="space-x-2">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs border rounded-2xl px-2 py-1 border-amber-800 bg-amber-700 text-white"
                >
                  {tags?.length - 1 === index ? tag : `${tag}`}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBox;
