import vec from "@/assets/images/Vec1.png";
import Image from "next/image";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Button from "../../ui/Button";

const Left = () => {
  return (
    <div className="min-h-[60vh] bg-indigo-500 py-18 pl-18">
      <div className="w-68 h-48 text-start flex bg-transparent flex-col gap-4 ">
        <h1 className="text-5xl font-semibold">
          Discover more than{" "}
          <span className="text-[#26A4FF]">5000+ Jobs</span>{" "}
        </h1>
        <Image src={vec} width={300} height={50} alt="Underline Vector" />
      </div>
      <p className="text-wrap w-94 text-gray-400">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>

      <form className="bg-white p-2 flex flex-col md:flex-row gap-4 w-150 my-2">
        <div className="flex items-center justify-start gap-2 ">
          <span className="cursor-pointer">
            <IoSearch className="text-[1.3rem]  group-hover:text-primary" />
          </span>
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 p-3"
          />
        </div>
        <div className="flex items-center justify-start gap-2 ">
          <span className="cursor-pointer">
            <IoLocationOutline className="text-[1.3rem]  group-hover:text-primary" />
          </span>

          <select
            id="currency"
            name="currency"
            // placeholder="Florence, Italy"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 p-3"
          >
            <option>Florence, Italy</option>
            <option>Florence, Italy</option>
            <option>Florence, Italy</option>
          </select>
        </div>

        <Button variant={1}>Search my job</Button>
      </form>
      <p className="text-xs">
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
    </div>
  );
};

export default Left;