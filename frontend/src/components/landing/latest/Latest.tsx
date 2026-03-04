import Link from "next/link";
import { FaArrowRight, FaDropbox } from "react-icons/fa";
import LatestBox from "./LatestBox";
import pattern from "@/assets/images/Pattern.png";

const Latest = () => {
  return (
    <div
      className="py-14 lg:px-22 px-6 xl:px-32 bg-slate-100 opacity-90 w-full h-full latest"
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundPosition: "right bottom",
        backgroundSize: "initial",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
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
        {[...Array(8)].map((_, i) => (
          <div key={i}>
            <LatestBox
              icon={<FaDropbox />}
              type="Full-Time"
              title="Brand Designer"
              platform="Dropbox"
              address="San Fransisco, US"
              tags={["Design", "Marketing"]}
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

export default Latest;
