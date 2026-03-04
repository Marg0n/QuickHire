import Link from "next/link";
import React from "react";
import { FaArrowRight, FaDropbox } from "react-icons/fa";
import LatestBox from "./LatestBox";

const Latest = () => {
  return (
    <div className="xl:py-24 py-14 lg:px-22 px-6 xl:px-32 bg-transparent w-full h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Latest <span className="text-[#26A4FF]">jobs open</span>
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 my-12">
        <LatestBox
          icon={<FaDropbox />}
          type="Full-Time"
          title="Brand Designer"
          platform="Dropbox"
          address="San Fransisco, US"
          tags={["Design", "Marketing"]}
        />
        <LatestBox
          icon={<FaDropbox />}
          type="Full-Time"
          title="Brand Designer"
          platform="Dropbox"
          address="San Fransisco, US"
          tags={["Design", "Marketing"]}
        />
        <LatestBox
          icon={<FaDropbox />}
          type="Full-Time"
          title="Brand Designer"
          platform="Dropbox"
          address="San Fransisco, US"
          tags={["Design", "Marketing"]}
        />
        
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

export default Latest;
