import vec from "@/assets/images/Vec1.png";
import Image from "next/image";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Button from "../../ui/Button";
import pattern from "@/assets/images/Pattern.png";
import pic from "@/assets/images/Pic.png";

const HeroContent = () => {
  return (
    <div
      className="xl:py-24 py-14 lg:px-22 px-6 xl:px-30 bg-transparent w-full h-full relative z-50 space-y-4 "
      style={{
        backgroundImage: `url(${pattern.src})`,
        backgroundPosition: "right bottom",
        backgroundSize: "initial",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="w-86 xl:w-112 xl:h-76 text-start flex flex-col lg:gap-2 xl:gap-4 ">
        {/* static section */}
        <h1 className="xl:text-7xl text-5xl font-semibold font-clash xl:leading-20 leading-14">
          Discover more than{" "}
          <span className="text-[#26A4FF]">5000+ Jobs</span>{" "}
        </h1>
        <Image src={vec} width={450} height={50} alt="Underline Vector" />
      </div>
      <p className="lg:text-sm xl:text-xl text-wrap xl:w-124 lg:w-90 text-gray-400 lg:leading-6 xl:leading-8">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>

      {/* inputs */}
      <form className="bg-white p-3 xl:p-5 flex flex-col md:flex-row gap-6 md:gap-2 xl:gap-12 lg:w-148 xl:w-210 my-4 shadow-md ">
        <div className="flex items-center justify-start gap-2 xl:gap-4 ">
          <span className="cursor-pointer">
            <IoSearch className="xl:text-3xl text-[1.38rem] group-hover:text-primary" />
          </span>
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 xl:p-3 w-full md:w-auto"
          />
        </div>

        <div className="flex items-center justify-start gap-2 xl:gap-4 ">
          <span className="cursor-pointer">
            <IoLocationOutline className="text-[1.38rem] xl:text-3xl group-hover:text-primary" />
          </span>

          <select
            id="currency"
            name="currency"
            // placeholder="Florence, Italy"
            className="border-b-1  border-slate-600 bg-transparent placeholder:text-gray-400 xl:p-3 w-full md:w-auto xl:w-56"
          >
            <option>Florence, Italy</option>
            <option>Dhaka, Bangladesh</option>
            <option>Florence, Italy</option>
          </select>
        </div>

        <Button variant={1} className="xl:w-56 text-lg lg:text-xs xl:text-base">
          Search my job
        </Button>
      </form>

      {/* popular */}
      <p className="xl:text-base lg:text-xs flex flex-col md:flex-row">
        <span className="text-slate-600 ">Popular : </span>UI Designer, UX
        Researcher, Android, Admin
      </p>

      {/* pic */}
      <div className="hidden lg:block absolute top-0 right-[-40] h-full z-[-1]">
        <Image
          src={pic}
          // width={625}
          // height={400}
          alt="model picture"
          className="
            lg:w-[500px]          
            xl:w-[715px]       
            h-auto
          "
          priority
        />
      </div>
    </div>
  );
};

export default HeroContent;
