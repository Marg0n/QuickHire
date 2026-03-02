import vec from "@/assets/images/Vec1.png";
import Image from "next/image";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Button from "../../ui/Button";
import pattern from "@/assets/images/Pattern.png";
import pic from "@/assets/images/Pic.png";

const Left = () => {
  return (
    <div
      className="md:py-24 md:px-32 bg-transparent w-full h-full relative z-50"
      style={{
        backgroundImage: `url(${pattern.src})`, 
        backgroundPosition: "right bottom", 
        backgroundSize: "initial", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll", 
      }}
    >
      <div className="w-112 h-76 text-start flex flex-col gap-4 ">
        {/* static section */}
        <h1 className="text-7xl font-semibold font-clash leading-20">
          Discover more than{" "}
          <span className="text-[#26A4FF]">5000+ Jobs</span>{" "}
        </h1>
        <Image src={vec} width={450} height={50} alt="Underline Vector" />
      </div>
      <p className="text-xl text-wrap w-124 text-gray-400 leading-8">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>

      {/* inputs */}
      <form className="bg-white p-5 flex flex-col md:flex-row gap-12 w-210 my-4 shadow-md ">
        <div className="flex items-center justify-start gap-6 ">
          <span className="cursor-pointer">
            <IoSearch className="text-3xl  group-hover:text-primary" />
          </span>
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 p-3"
          />
        </div>
        <div className="flex items-center justify-start gap-6 ">
          <span className="cursor-pointer">
            <IoLocationOutline className="text-3xl group-hover:text-primary" />
          </span>

          <select
            id="currency"
            name="currency"
            // placeholder="Florence, Italy"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 p-3 md:w-56"
          >
            <option>Florence, Italy</option>
            <option>Dhaka, Bangladesh</option>
            <option>Florence, Italy</option>
          </select>
        </div>

        <Button variant={1} className="w-56">Search my job</Button>
      </form>

      {/* popular */}
      <p className="text-base">
        <span className="text-slate-600 ">Popular : </span>UI Designer, UX
        Researcher, Android, Admin
      </p>

      {/* pic */}
      <div className="hidden md:block absolute top-0 right-0 h-full z-[-1]">
        <Image src={pic} width={625} height={400} alt="model picture" className="object-fit"/>
      </div>
    </div>
  );
};

export default Left;
