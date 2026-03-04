import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDropbox } from "react-icons/fa";
import FeaturedBox from "./FeaturedBox";
import { LuPencilRuler } from "react-icons/lu";

const Featured = () => {
  return (
    <div className="xl:py-24 py-14 lg:px-22 px-6 xl:px-32 bg-transparent w-full h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h1>

        <Link
          href={"/showall"}
          className="hidden md:block md:flex justify-between items-center gap-2 text-blue-700 text-semibold"
        >
          Show all jobs
          <FaArrowRight />
        </Link>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 my-12">
        {[...Array(8)].map((_, i) => (
          <div key={i} >
            <FeaturedBox
              icon={<FaDropbox />}
              type="Full Time"
              title="Design"
              platform="Dropbox"
              address="San Fransisco, US"
              tags={["Design", "Business"]}
              description="Dropbox is looking for Brand Designer to help the team to create a new brand identity for the company."
            />
          </div>
        ))}
      </div>

      <Link
        href={"/showall"}
        className=" md:hidden flex justify-start items-center gap-2 text-blue-700 font-semibold"
      >
        Show all jobs
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Featured;
